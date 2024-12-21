// إذا كنت تستخدم بيئة Node.js:
import { createClient } from '@supabase/supabase-js';

// إعداد Supabase
const supabaseUrl = 'https://wrjkhrtccchhrnmudvkq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndyamtocnRjY2NoaHJubXVkdmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ2NDE4MDQsImV4cCI6MjA1MDIxNzgwNH0.UFt-kMwuloLvmQW0sagwvCQ2buVSh6Ojf-gmLJ6Jd5s'; // تأكد من أن تستخدم المفتاح الصحيح

// إنشاء العميل
const supabase = createClient(supabaseUrl, supabaseKey);

// تصدير العميل للاستخدام في باقي الملفات
export default supabase;
