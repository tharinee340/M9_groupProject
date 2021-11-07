import FacebookLogin from 'react-facebook-login';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const Facebook = ({className}) => {
  const history = useHistory();



  const responseFacebook = async (response) => {
    const { name, email, accessToken, userID } = response;
    const user = { name, email, accessToken, userId: userID }; //จะเอาไปเก็บไว้หลังบ้าน
    console.log(response)
    const res = await axios({
      method: "post",
      url: "http://localhost:8080/auth/signin/facebook",
      data: { user } //option ส่งข้อมูลกลับไป
    });
    localStorage.setItem(`token`, JSON.stringify(res.data.token));
    localStorage.setItem(`name`, JSON.stringify(res.data.user.name));
    history.push('/home')
  }


  return (
    <>
    <div className={className}>
    <FacebookLogin 
      appId="444609017082568"
      fields="name,email,picture" //เอาอะไรมาจาก facebook บ้าง
      scope="public_profile, email"
      callback={responseFacebook}
      className="facebook"
    />
    </div>
    </>
  )
}

export default styled(Facebook)`
  .kep-login-facebook.metro {
    border-radius: 10px;
    width: 100%;
    height: 45px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: "Urbanist", sans-serif;
    font-weight: 400;
    padding: 0;
  }
  margin-top:20px;
`
