const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// ১. CREATE (টাস্ক যোগ করা)
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("কিছু একটা লিখুন!");
        return;
    }

    createTaskElement(taskText);
    taskInput.value = ""; // ইনপুট খালি করা
});

function createTaskElement(text) {
    const li = document.createElement('li');
    
    // ২. READ (ডাটা দেখানো)
    li.innerHTML = `
        <span class="task-text">${text}</span>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);

    // ৩. DELETE (মুছে ফেলা)
    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });

    // ৪. UPDATE (পরিবর্তন করা)
    const editBtn = li.querySelector('.edit-btn');
    const span = li.querySelector('.task-text');

    editBtn.addEventListener('click', () => {
        const newText = prompt("টাস্কটি পরিবর্তন করুন:", span.innerText);
        if (newText !== null && newText !== "") {
            span.innerText = newText;
        }
    });
}