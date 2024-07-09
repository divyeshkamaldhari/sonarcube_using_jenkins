import expiredbg from '../../../assets/svg-images/expired-bg.svg';

export default function LinkExpired({
  errorMessage,
}: {
  errorMessage: string;
}) {
  return (
    <div className="link-expired">
      <div className="onboard-header">
        <div className="logo">
          <span className="icon">
            {/* <img src={logo.src} alt="logo" onError={({ currentTarget }) => OnImageError(currentTarget)}/> */}
          </span>
        </div>
      </div>
      <div className="link-expired-bg">
        <img src={expiredbg} alt="img" />
      </div>
      <div className="expired-text">
        <h3>{errorMessage}</h3>
      </div>
    </div>
  );
}
