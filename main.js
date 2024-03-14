import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://evzeezotdchftmtljick.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emVlem90ZGNoZnRtdGxqaWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjUxODMsImV4cCI6MjAyNjAwMTE4M30.MlrevzO0M9WUQ95609l0u37pwbegaSczpGW9uEOEY2E'
const supabase = createClient(supabaseUrl, supabaseKey)

let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for (let book of Books){
    let booklist = document.getElementById('Books');
    booklist.innerHTML += `<li>${book.title}</li>`;
  }