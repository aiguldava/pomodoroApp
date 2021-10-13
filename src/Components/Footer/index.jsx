import "./footer.css";

const Footer = () => {
  return (
    <div className="dava">
      <div className="pomFooter">
        <div className="footer">
          <p className="footerP1">
            An online Pomodoro Timer to boost <br /> your productivity
          </p>
          <h5>What is Pomofocus?</h5>
          <hr />
          <p className="footerP2">
            Pomofocus is a customizable pomodoro timer that works on <br />
            desktop & mobile browser. The aim of this app is to help you focus
            <br /> on any task you are working on, such as study, writing, or
            coding.
            <br /> This app is inspired by Pomodoro Technique which is a time{" "}
            <br />
            management method developed by Francesco Cirillo.
          </p>
          <p className="footerP3">What is Pomodoro Technique?</p>
          <hr />
          <p className="footerP4">
            The Pomodoro Technique is created by Francesco Cirillo for a more
            <br /> productive way to work and study. The technique uses a timer
            to
            <br /> break down work into intervals, traditionally 25 minutes in
            length,
            <br /> separated by short breaks. Each interval is known as a
            pomodoro,
            <br /> from the Italian word for 'tomato', after the tomato-shaped
            kitchen
            <br /> timer that Cirillo used as a university student. - Wikipedia
          </p>
          <p className="footerP5">How to use the Pomodoro Timer?</p>

          <ol>
            <li>
              <b>Add tasks</b> to work on today
            </li>
            <li>
              <b>Set estimate pomodoros</b> (1 = 25min of work) for each tasks
            </li>
            <li>
              <b>Select a task</b> to work on
            </li>
            <li>
              <b>Start timer</b> and focus on the task for 25 minutes
            </li>
            <li>
              <b>Take a break</b> for 5 minutes when the alarm ring
            </li>
            <li>
              <b>Add tasks</b> to work on today
            </li>
          </ol>
          <p className="footerP6"> Features</p>
          <hr />
          <ul>
            <li>
              <b>Responsive design</b>{" "}
              <span>that works with desktop and mobile</span>
            </li>
            <li>
              <b>Color transition</b>{" "}
              <span>to switch moods between work time and rest time</span>
            </li>
            <li>
              <b>Audio notification</b>{" "}
              <span>at the end of a timer period</span>
            </li>
            <li>
              <b>Customizable timer</b>{" "}
              <span>intervals to suit your preference</span>
            </li>
          </ul>
          <p className="footerP7">Download App</p>
          <hr />
          <ul>
            <li>
              <b>For macOS</b> <span>(zip file)</span>
            </li>
            <li>
              <b>For Windows</b> <span>(zip file)</span>
            </li>
          </ul>
          <div className="footerDiv"></div>
          <div className="footerLink">
            <div>HOME</div>
            <div>PRIVACY</div>
            <div>CONTACT</div>
            <div>SIMPLE VERSION</div>
          </div>
          <p className="footerP8">
            Made with <b style={{ color: "red" }}>dava_senior</b>
          </p>
          <p className="footerP9">©Pomofocus 2021. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
