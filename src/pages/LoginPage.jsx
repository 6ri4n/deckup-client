import LoginForm from "../components/Login/LoginForm";

function LoginPage() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <section className="flex flex-col rounded-3xl p-12 m-6 border">
        <div className="flex justify-center text-xl tracking-wide mb-10">
          Welcome!
        </div>
        <div className="mt-5 mx-5">
          <LoginForm />
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
