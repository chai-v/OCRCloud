import { useGoogleLogin } from '@react-oauth/google';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/UserContext';
import axios from 'axios';

export const Login = () => {
    const navigate = useNavigate();
    const { userlogin } = useAuth();

    const onLogin = async (tokenResponse) => {
        try{
            const response = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
                params: {
                  access_token: tokenResponse.access_token,
                },
              });
            const user = {
                name: response.data.name,
                token: tokenResponse.access_token
            }
            return user;
        } catch (error) {
            console.log(error);
        }
    }
    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse);
            navigate('/dashboard/text');
            userlogin(onLogin(tokenResponse));
        },
        onError: error => {
            console.log(error);
        }
    });

    return (
        <div className=''>
            <div className="flex h-auto w-auto items-center overflow-visible px-2">
                <div className="relative flex items-center w-72 md:w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
                    <div className="mx-auto mb-2 space-y-3">
                        <h1 className="text-center text-3xl font-bold text-gray-700">Sign in</h1>
                        <p className="text-gray-500">Login with Google Account</p>
                    </div>
                    <button className="border px-4 py-1 rounded-md flex flex-wrap items-center gap-2" onClick={() => login()}>
                        <div class="icons8-google"></div>
                        <span>Sign in with Google</span>
                    </button>
                    <Link to="/privacy">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}
