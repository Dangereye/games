import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useRouter } from "next/router";
import Button from "./buttons/Button";

function ErrorMessage() {
  const { appState } = useContext(AppContext);
  const { themeState } = useContext(ThemeContext);
  const router = useRouter();
  return (
    <section style={{ color: themeState.text.primary }}>
      <h1 className="display-title">Awkward...</h1>
      <p>{appState.error.message}.</p>
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
export default ErrorMessage;
