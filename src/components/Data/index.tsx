import React, { useState, useEffect } from 'react'
import { getList } from 'Services'

function List() {
  const [list, setList] = useState([])

  useEffect(() => {
    let mounted = true
    getList().then((values) => {
      if (mounted) {
        setList(values)
      }
    })
    return () => {
      mounted = false
    }
  }, [])
}
export default List
