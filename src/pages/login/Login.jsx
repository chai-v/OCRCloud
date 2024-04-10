import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';


export const Login = () => {
    const navigate = useNavigate();
    const responseMessage = (response) => {
        console.log(response);
        navigate('/dashboard');
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    return (
        <div className=''>
            <div class="flex h-auto w-auto items-center overflow-visible px-2">
                <div class="relative flex items-center w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
                    <div class="mx-auto mb-2 space-y-3">
                        <h1 class="text-center text-3xl font-bold text-gray-700">Sign in</h1>
                        <p class="text-gray-500">Login with Google Account</p>
                    </div>
                    <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
                </div>
            </div>
        </div>
    )
}
