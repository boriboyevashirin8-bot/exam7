import { Form, Input, Button }  from "antd"
import type { LoginFormType } from "../../@types";
import { useAxios } from "../../hooks/useAxios";
const Login = () => {
    const axios = useAxios();
    const login = (e:LoginFormType ) => {
        
        axios({url: "api/auth/sign-in", method: "POST", body: e});
    }
  return (
    <div className='w-[400px] m-auto flex items-center justify-center h-screen flex-col'>
      <h1 className="mb-5 text-2xl">Welcome to CRM</h1>

      <Form onFinish={login} className="w-full">
        <Form.Item 
        name={"email"}
        rules={[{required: true, message:"Plase enter your email !"}]}>
            <Input type="email" placeholder="Plase enter your email..." />
        </Form.Item>
        <Form.Item 
        name={"password"}
        rules={[{required: true, message:"Plase enter your password !"}]}>
            <Input type="password" placeholder="********" />
        </Form.Item>
        <Button type="primary" className="w-full" htmlType="submit">Login</Button>
      </Form>
    </div>
  )
}

export default Login;

