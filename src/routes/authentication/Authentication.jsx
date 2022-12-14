import SignUpForm from '../../components/sign-up-form/Sign-up';
import SignInForm from '../../components/sign-in-form/sign-in';

import './authentication.scss';

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
