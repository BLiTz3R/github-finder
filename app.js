// Instantiate GitHub class
const github = new Github;

// Instantiate UI class
const ui = new UI;

// // Search input on keypress (no submit button)
// const searchUser = document.getElementById('searchUser');

// Search input
const searchButton = document.getElementById('searchButton');

// // Search input event listener on keypress (no submit button)
// searchUser.addEventListener('keyup', (e) => {
//     // Get input text
//     const userText = e.target.value;

// Search input event listener (with submit button to avoid request flooding)
searchButton.addEventListener('click', (e) => {
    // Get input text
    const userText = document.getElementById('searchUser').value;

    // Below is the same for both versions
    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {
                // if profile not found
                if (data.profile.message === 'Not Found') {
                    // Show not found alert
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // else show profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    } else {
        // Clear profile
        ui.clearProfile();
    }
})