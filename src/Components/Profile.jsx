import React from 'react'

const Profile = () => {
  return (
     <div>
      <font-weight/>
      <h1>Profile นาย ทรงธรรม มั่นกลัด </h1>
      <hr />
      <br />

      <div style={{display:"flex", alignItems:"flex-start", gap:30}}>
       <img src="https://scontent.fbkk12-6.fna.fbcdn.net/v/t39.30808-6/487304871_2549729102033199_8846379691115516879_n.jpg?stp=dst-jpg_tt6&cstp=mx951x960&ctp=s951x960&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGuTsAjvEFaGBiI3Kq53YvKC6LrT6usU74LoutPq6xTvnO4MwC6FM2kECJPPLRkfLbPBDao1iGzctCZX7foG5fJ&_nc_ohc=VgHJfU3DVlIQ7kNvwHYdaeB&_nc_oc=AdpHLjfyyjcFnvF8MNyTfN9UA9b2t3-DX95BB6_rtG4Vi0mHy_jCbOomyKSp3OiVvS0&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&_nc_gid=-bbpzhOc8T-cTiC08Vpufg&_nc_ss=7a2a8&oh=00_AQQxPweRwnlSn0FaPSL6__6mJu2Uol8oc1yFalQxtGkN_A&oe=6B0670E7" width="400" height="250" />
      <div>
      <h2>ประวัติส่วนตัว</h2>
      <p>ชื่อ นาย ทรงธรรม มั่นกลัด</p>
      <p>เกิดวันที่12 สิงหาคม พ.ศ 2546</p>
      <p>อายุ 23 ปี </p>
      </div>
      </div>
    </div> 
  )
}

export default Profile