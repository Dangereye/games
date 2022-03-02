import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import Button from "../components/shared/buttons/Button";

function NotFound() {
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <section className="not-found" style={{ color: themeState.text.primary }}>
      <h1 className="display-title">awkward...</h1>
      <p className="body-text">
        Oops! We don&apos;t know how it happened, or why - the page you
        requested isn&apos;t here. Sorry :(
      </p>
      <div className="btns mt-4">
        <Button
          name="View All games"
          classes="btn btn--large btn--primary btn--full"
          func={() => router.push("/")}
        />
        <Button
          name="Go Back"
          classes="btn--small btn--text btn--full"
          styles={{ borderColor: themeState.text.primary }}
          func={() => router.back()}
        />
      </div>
    </section>
  );
}
export default NotFound;
