const toggleBtn = document.getElementById('themeToggle');
const body = document.body;

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  body.classList.toggle('light');
});
const slider = document.getElementById("ispSlider");
const message = document.getElementById("ispMessage");
const img = document.getElementById("ispImage");

slider.addEventListener("input", () => {
  if (slider.value == 0) {
    message.textContent = "Confused about where and how to start ? 😓";
    img.src = "before.jpg";
  } else {
    message.textContent = "Confident, skilled & earning!through ISP program 💼🔥";
    img.src = "after.jpg";
  }
});
function toggleChat() {
  const chatBox = document.getElementById("chatWindow");
  chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
}
function chatAnswer() {
  const input = document.getElementById("chatInput").value.toLowerCase();
  const response = document.getElementById("chatResponse");
  let fullText = "";

  // Determine the response
  if (
    input.includes("what is isp") ||
    input.includes("student partner")
  ) {
    fullText =
      "ISP stands for Internshala Student Partner.\n\n" +
      "It’s a campus ambassador program where selected students represent Internshala in their school or college.\n\n" +
      "As an ISP, you:\n" +
      "- Promote Internshala’s online trainings\n" +
      "- Help friends upskill & explore careers\n" +
      "- Earn ₹200 per training, ₹5 per signup\n" +
      "- Build leadership & communication skills\n" +
      "- Receive a certificate & LoR from the CEO\n\n" +
      "It’s a great way to earn, learn, and grow!";
  } else if(input.includes("why should i join internshala")){
    fullText="Great question!\n\n" +
"Joining Internshala can open doors to real career growth — even while you're still in school.\n\n" +
"Here’s why students love Internshala:\n" +
"- Access to 10,000+ internships from top companies\n" +
"- Online trainings to learn in-demand skills (like Web Dev, Data Science, Python, etc.)\n" +
"- Build your resume and gain real-world experience\n" +
"- ISP Program lets you earn and gain leadership experience\n" +
"- Get certificates and a chance to win rewards\n\n" +
"Whether you're just starting out or already skilled — Internshala helps you grow smarter and faster! 🚀";
  } else if (
  input.includes("can i earn through it") ||
  input.includes("how can i earn")
) {
  fullText =
    "Yes, you can earn through the ISP program! 💸\n\n" +
    "Here's how:\n" +
    "- ₹200 for every student who purchases a training through your referral link\n" +
    "- ₹5 for every verified sign-up via your link\n" +
    "- Bonus rewards like certificates, goodies, and even an iPhone 14 for top performers!\n\n" +
    "It's a great opportunity to earn while building skills, leadership, and communication experience. 💼";
} else if (input.includes("is it safe")) {
  fullText =
  "Yes, Internshala is completely safe and trusted by millions of students across India. ✅\n\n" +
  "- It has partnerships with 80,000+ companies\n" +
  "- All internships and trainings are verified\n" +
  "- Your personal details are protected and never misused\n\n" +
  "Thousands of students use Internshala daily for skill-building, internships, and career growth. You’re in good hands! 🙌";
} else if (
  input.includes("is it student friendly") ||
  input.includes("can we work from home")
) {
fullText =
  "Absolutely! The ISP program is designed to be 100% student-friendly. 🎓✨\n\n" +
  "- It’s fully work-from-home, so you can manage it with your classes\n" +
  "- Only 2–3 hours per week are expected\n" +
  "- You even get breaks during exams 📚\n\n" +
  "You can participate from anywhere, anytime — and still gain leadership, communication skills, and rewards! 💼💙";}
  else if (input.includes("is this page official page of internshal")||input.includes("is it official website of internshala")) {
    fullText =
  "No, this is not the official Internshala website. ❌\n\n" +
  "This page is created by a Student Partner (ISP) to help other students understand Internshala and its benefits. 💡\n\n" +
  "The official Internshala site is:\n" +
  "👉 www.internshala.com\n\n" +
  "Everything shared here is based on verified information and my own experience as an ISP. 😊";
  } else if (input.includes("will i get job guaranteed")||input.includes("how will i get job/intern")||input.includes("job")) {
    fullText =
  "Internshala does not guarantee a job or internship, but it gives you all the right tools to achieve one. 💼🚀\n\n" +
  "You can:\n" +
  "- Learn job-ready skills through certified trainings\n" +
  "- Apply to 10,000+ verified internships across India\n" +
  "- Build a strong resume and stand out to employers\n\n" +
  "Many students have successfully landed internships and jobs by actively learning and applying through Internshala — your dedication matters the most! ✨";
  } else if (input.includes("do i have to work during exam days as an isp")|| input.includes("will i get holdiyas on exam day")){
    fullText =
  "Don’t worry! ISP is designed to be student-friendly. 🎓✅\n\n" +
  "You are **not required to work during your exam days**. Internshala understands that academics come first.\n\n" +
  "- You can take a break from ISP tasks during exams 📚\n" +
  "- There's no penalty for exam-time inactivity\n" +
  "- You can resume your tasks after exams without any issue\n\n" +
  "This flexibility is what makes the ISP program perfect for students! 🧠💙";
  } else if (input.includes("do i need money to become an isp")||input.includes("what is the procedure of becoming an isp")||input.includes("how can i become an isp")||input.includes("does being an isp requires money")||input.includes("is being an isp free") ) {
    fullText="It doesn't requires money but it requires skill and dedication \n"+
  "No, becoming an ISP is completely free! ❌💰\n\n" +
  "You don’t need to pay anything to join.\n\n" +
  "What you do need is:\n" +
  "- Passion \n" +
  "- Basic communication skills\n" +
  "- Dedication to complete tasks each week\n\n" +
  "If selected, you’ll get access to your ISP dashboard and referral tools — all without spending a single rupee. 💙🚀";
  }else if (
  input.includes("how can i become a isp") ||
  input.includes("what are the procedures to become an isp") ||
  input.includes("what steps do i have to follow to become an isp") ||
  input.includes("how to be an isp"))  {
  fullText =
  "Becoming an ISP (Internshala Student Partner) is easy and free! ✅\n\n" +
  "Here are the steps:\n" +
  "1️⃣ Go to the official ISP application page on Internshala\n" +
  "2️⃣ Fill out the form with your basic details\n" +
  "3️⃣ If shortlisted, you'll receive an offer letter on your email\n" +
  "4️⃣ Accept the offer to confirm your spot\n" +
  "5️⃣ You'll get access to your dashboard and referral tools once the program starts\n\n" +
  "The selection is based on your interest, communication skills, and how seriously you take the opportunity 💼💙";}
  else if (
  input.includes("how many hours would i need to work as an isp") ||
  input.includes("how much hours i will work after being an isp") ||
  input.includes("how much hour of work will i do")
){
  fullText =
  "Great question! The ISP program is designed to be flexible and student-friendly. 🕒✅\n\n" +
  "You’ll need to dedicate only **2 to 3 hours per week** to complete your tasks.\n\n" +
  "You can do the work anytime during the week, from home, and even skip during your exams. 🎓📚\n\n" +
  "This makes it easy to manage along with your studies — while still learning, earning, and growing! 💼🚀";
} else if (input.includes("When will i recieve my reward")||input.includes("when will i get my earnings")||input.includes("will get my money instantly when i will do a task")) {
  fullText =
  "Good question! 💰 Internshala processes all ISP rewards **after the program ends** — not instantly.\n\n" +
  "Here’s how it works:\n" +
  "- You’ll earn points and money for referrals and signups during the program\n" +
  "- At the end (after 18th July 2025), Internshala reviews your performance\n" +
  "- Then, your rewards and cash are processed and sent within 4–6 weeks 📦\n\n" +
  "So you won’t get money instantly after each task — but you’ll receive it once the program ends, if you qualify. ✅";
} else if (input.includes("how will i receive my payment")||input.includes("how will i get my money")||input.includes("can i take money in my fampay")||input.includes("bank")||input.includes("paytm wallet")){
  fullText =
  "Internshala usually sends your payment directly to your **bank account** after the program ends. 🏦\n\n" +
  "You’ll be asked to fill your bank details in the ISP dashboard once you qualify for rewards.\n\n" +
  "Note:\n" +
  "- Payments are **not sent to wallets** like FamPay or Paytm\n" +
  "- Make sure you enter correct bank account details when the time comes\n\n" +
  "If you don’t have a bank account, you can use a parent’s account (with their permission) to receive your earnings. ✅";
} else if (input.includes("can i use my parent's account")||input.includes("scam")||input.includes("is it safe to use parent's account")||input.includes("what if i didn't got my money")||input.includes("no payment")){
  fullText =
  "Don’t worry — the ISP program is 100% legit and safe. ✅\n\n" +
  "- Internshala is a trusted platform used by millions of students across India\n" +
  "- All ISP earnings are processed officially after the program ends\n\n" +
  "If you don’t have a bank account yet, you can safely use your **parent’s account** (with their permission) to receive your reward. 💙\n\n" +
  "Make sure to enter the correct details when the time comes. If any issue happens (like wrong account), Internshala gives you a **second chance** to correct it.\n\n" +
  "So relax — it’s safe, secure, and handled professionally. 💼💸";
} else if (input.includes("benefits of being an isp") || input.includes("merits of isp") || input.includes("why should i be an isp")||input.includes("advantage")){
fullText =
  "Being an ISP comes with amazing benefits — both personal and professional! 💼✨\n\n" +
  "Here’s what you gain:\n" +
  "- Leadership and communication skills\n" +
  "- A chance to earn money through referrals\n" +
  "- A certificate and letter of recommendation from Internshala’s CEO\n" +
  "- National-level recognition if you perform well 🏆\n" +
  "- Experience in digital marketing, public speaking, and branding\n" +
  "- A powerful addition to your resume and LinkedIn profile\n\n" +
  "In short, it helps you learn, earn, and shine — all while still being a student! 🌟";}
  else if (input.includes("why internshala")|| input.includes("why should i choose internshala only")||input.includes("why not others"))
  else {
    fullText = "Sorry, I don’t understand that. Try asking about Internshala or ISP 😊";
  }

  // Show "Typing..." first
  response.textContent = "Typing...";

  // After a short delay, run the typewriter effect
  setTimeout(() => {
    response.textContent = ""; // clear "Typing..."
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        response.textContent += fullText.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, 20); // typing speed (ms)
  }, 1000); // 1 second delay before typing starts
}