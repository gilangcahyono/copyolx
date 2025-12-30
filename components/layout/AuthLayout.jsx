const AuthLayout = ({ children }) => {
  return (
    <div className="max-w-md mx-auto h-screen flex items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
