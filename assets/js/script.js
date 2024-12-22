// إعداد Supabase
const supabaseUrl = 'https://ovqgoulmckynhzrgrpmx.supabase.co';  // رابط المشروع في Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92cWdvdWxtY2t5bmh6cmdycG14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4OTc0OTQsImV4cCI6MjA1MDQ3MzQ5NH0.dHtKEeMzo0Ytm3-jo3yljRDebT1X6I6dirwlsF9W02w';   // المفتاح العام للمشروع
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// دالة تسجيل المستخدم
async function registerUser(username, studentName, phone, email, password) {
  const { user, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    console.error('Error registering user:', error.message);
    alert(error.message);
  } else {
    // إضافة بيانات المستخدم إلى قاعدة البيانات
    const { data, error: dbError } = await supabase.from('users').insert([
      {
        username: username,
        student_name: studentName,
        phone: phone,
        email: email,
        created_at: new Date().toISOString(),
      }
    ]);

    if (dbError) {
      console.error('Error inserting data into database:', dbError.message);
      alert(dbError.message);
    } else {
      alert('تم إنشاء الحساب بنجاح!');
      window.location.href = 'index.html'; // إعادة توجيه إلى صفحة تسجيل الدخول
    }
  }
}

// دالة تسجيل الدخول
async function loginUser(identifier, password) {
  const { user, error } = await supabase.auth.signInWithPassword({
    email: identifier,
    password: password,
  });

  if (error) {
    console.error('Error logging in:', error.message);
    alert(error.message);
  } else {
    alert('تم تسجيل الدخول بنجاح!');
    window.location.href = 'index.html'; // إعادة توجيه إلى الصفحة الرئيسية
  }
}

// التعامل مع إرسال نموذج التسجيل
document.getElementById('register-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const studentName = document.getElementById('student-name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  registerUser(username, studentName, phone, email, password);
});

// التعامل مع إرسال نموذج تسجيل الدخول
document.getElementById('login-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const identifier = document.getElementById('identifier').value;
  const password = document.getElementById('password').value;

  loginUser(identifier, password);
});
