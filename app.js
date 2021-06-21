
		function displayBig(e) {
			e.parentElement.classList.toggle('display-big');
			document.querySelector('.fas').classList.toggle('fa-expand');
			document.querySelector('.fas').classList.toggle('fa-compress');
		}



		const notesSection = document.querySelector('.notes-section');

		window.onload = () => {
			if (notesSection.innerHTML !== '') {
				notesSection.style.backgroundImage = 'none'
			}
		}



		const searchIcon = document.querySelector('.search-icon');
		const searchBox = document.querySelector('.search-box');
		searchIcon.addEventListener('click', (e) => {
			searchBox.classList.toggle('show');
			searchBox.value = '';
		})

		const addNoteBtn = document.querySelector('.add-new-note-btn');
		addNoteBtn.addEventListener('click', () => {
			document.querySelector('.new-note').classList.add('create-new-note');
			document.querySelector('.new-note-modal').style.visibility = 'visible';
		})

		const closeNewNoteBtn = document.querySelector('.close-btn');
		closeNewNoteBtn.addEventListener('click', () => {
			document.querySelector('.new-note').classList.remove('create-new-note');
			document.querySelector('.new-note-modal').style.visibility = 'hidden';
		})

		const newTitle = document.querySelector('.new-title');
		const newDesc = document.querySelector('.new-desc');

		const warningMessage = document.querySelector('.warning-message');



		const saveBtn = document.querySelector('.save-btn');
		saveBtn.addEventListener('click', () => {

			const d = new Date();
			var date = d.toString();


			if (newTitle.value.trim() !== '' || newDesc.value.trim() !== '') {

				var newNote = document.createElement('div');
				newNote.classList.add('note');

				var bgColors = ['aquamarine', 'bisque', 'lightpink', 'palegreen','azure','lavender','lightcyan','lightskyblue','mintcream','mistyrose']

				var k = Math.floor(Math.random() * bgColors.length);

				newNote.style.backgroundColor = bgColors[k];

				newNote.innerHTML = `<div class="note-action">
				<i class="fas fa-expand"></i>
			</div> 
				<h3 class="note-title">${newTitle.value}</h3>
			<p class="note-desc">${newDesc.value}...</p>
			<p class="note-date">${date.substr(4, 11)}</p>`;


				// var notesSection = document.querySelector('.notes-section');
				notesSection.appendChild(newNote);

				document.querySelector('.new-note').classList.remove('create-new-note');
				document.querySelector('.new-note-modal').style.visibility = 'hidden';

				warningMessage.style.transform = 'translate(-50%,0)';

				setTimeout(() => {
					warningMessage.style.transform = 'translate(-50%,-5rem)';
				}, 1500);

				newTitle.value = '';
				newDesc.value = '';

			}
			else {
				const errorMessage = document.querySelector('.error-message')
				errorMessage.style.transform = 'translate(-50%,0)';

				setTimeout(() => {
					errorMessage.style.transform = 'translate(-50%,-5rem)';
				}, 1000);
			}
		})


		

		function searchFunction(){
			var searchInput, filter,note, TitleText,DescText,i, nameValue;  

			searchInput = document.querySelector('.search-box');
			filter = searchInput.value.toLowerCase();
			TitleText = document.querySelectorAll('.note-title');
			DescText = document.querySelectorAll('.note-desc');
			note = document.querySelectorAll('.note');

			for(i=0; i<TitleText.length ; i++){
				titleValue = TitleText[i].textContent;
				descValue = DescText[i].textContent;
				if((titleValue.toLowerCase().indexOf(filter) > -1) || (descValue.toLowerCase().indexOf(filter) > -1)){
					note[i].style.display = '';
				}
				else{
					note[i].style.display = 'none';
				}
			}

		}	
	
