

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabaseUrl = 'https://evzeezotdchftmtljick.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2emVlem90ZGNoZnRtdGxqaWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0MjUxODMsImV4cCI6MjAyNjAwMTE4M30.MlrevzO0M9WUQ95609l0u37pwbegaSczpGW9uEOEY2E'
const supabase = createClient(supabaseUrl, supabaseKey)

  let { data: Books, error } = await supabase
  .from('Books')
  .select('*')

for (let Book of Books){
    let Booklist = document.getElementById('Books');
    Booklist.innerHTML += `<tr><td>${Book.title}</td><td>${Book.Author}</td><td>${Book.ISBN}</td></tr>`;
  }
