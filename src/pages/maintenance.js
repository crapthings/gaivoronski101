import React from 'react'

function Maintenance () {
  return (
    <div style={{
      position: 'relative',
      height: '100vh',
      display: 'flex',
      flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <img
        src='./img/unsplash-community-I5IGSBneWwE-unsplash.jpg'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />

      <div style={{
        position: 'absolute',
        color: 'white',
        fontSize: '4em'
      }}>
        <p>
          我们的网站正在进行维护。<br />
          请稍后再回来查看。
        </p>
      </div>
    </div>
  )
}

export default Maintenance
