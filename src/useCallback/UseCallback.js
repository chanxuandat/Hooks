import React, { useCallback } from 'react'

function UseCallback() {

  const handleIncrease = useCallback()

  return (
    <div style={{padding : "30px"}}>
    <h3>kiểu như là chuyền làm từ hàm cha xuống hàm con</h3>

    </div>
  )
}

export default UseCallback


//kiểu như là chuyền làm từ hàm cha xuống hàm con