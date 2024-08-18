A fullstack Chat Application

==> 

    After login/signup
    -------------------------
    > The user needs to login/signup using email & username & password only (input fields -> name, email(unique), username(unique), password) 
    Process = check if existing user or not, by using email-Id. 
            = if not exists then assign new user a ID(unique), timestamp, is_online & then render to homepage
            = if exists simply then render to homepage
    -------------------------
    user logged in
    -------------------------
    > The user can add a contact(left side bar) by searching username only
    Process = if user found with that username then pressa button & proceed to add to contact (create a chat-ID, participants-ID)
            = if user not found then show 'no users with this username' 
    -------------------------
    after clicking on a user from sidebar
    -------------------------
    > The right side area will be populated with a header(other user name & online status) , messages area(chat-ID - > previous messages) , footer(input area & send button)
    Process = simply get hold on username & card, render the details of the respective mapped card from left to right
            = after pressing input/send button trigger events to add message to queue/table/db with timestamp (senderID, receiverID, timestamp, chat-ID attribute)
            = there whould be a close button to close the current chat

info
> there will be no seperate page for user profile/settings, everything should be handeled by dialogue boxes only