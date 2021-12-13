import { useState, MouseEvent } from 'react'

export const useMoveElement = () => {
  const [isShow, setIsShow] = useState(false)
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [title, setTitle] = useState(null)
  const [movie, setMovie] = useState(null)
  const [timerId, setTimerId] = useState<number | undefined>(0)

  /**
   * 作品を取得する処理
   * @param id
   */
  const fetchMovie = async (id: string) => {
    const result = await fetch('http://localhost:3000/api/hello', {
      method: 'POST',
      body: JSON.stringify({
        id,
      }),
    }).then((res) => res.json())

    setTimeout(() => {
      setTitle(result.title)
      setMovie(result.movie)
    }, 2000)
  }

  /**
   * マウスがのった際の処理
   * @param e
   */
  const onMouseEnter = (e: MouseEvent<HTMLElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const _timerId = window.setTimeout(() => {
      const halfHeight = rect.height / 2
      setIsShow(true)
      setX(rect.x - rect.width / 2)
      setY(rect.y + halfHeight)
      fetchMovie(id)
    }, 500)

    setTimerId(_timerId)
  }

  /**
   * マウスが外れた際の処理
   */
  const onMouseLeave = () => {
    setIsShow(false)
    setTitle(null)
    setMovie(null)
    clearInterval(timerId)
  }

  return {
    isShow,
    x,
    y,
    title,
    movie,
    onMouseEnter,
    onMouseLeave,
  }
}
