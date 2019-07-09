  
window.onload = getPosts;
  const app = document.getElementById('root');
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  app.appendChild(container);   

function getPosts() {
    console.log('getPosts() running...');
    fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts', {  method: 'GET'
    }).then(res => {
      var j = res.json().then(data => {
        receivePostData(data);
      });
    }, err => console.error(err)); 
}

function receivePostData(data) {
  for (let i = 0; i < data.length; i++) addPostToDOM(data[i]);
}

function addPostToDOM(post) {
    var title = document.createElement('div');
    title.classList.add('userrow');
      var avatar = document.createElement('img');
      avatar.src = post.avatar;
      var username = document.createElement('p');
      username.classList.add('username');
      username.textContent = post.userName;
        container.appendChild(title);
        title.appendChild(avatar);
        title.appendChild(username);     
        dropDownMenu(title);
    var article = document.createElement('div');
    article.classList.add('article');
      var imageUrl = post.imageUrl;
      if (imageUrl) {  
        try {          
          var img = document.createElement('img');
          img.src = imageUrl;
          article.appendChild(img);
        } 
        catch (error) {
          console.error(error);
        }
      }

    putIcons(article);
      var number_likes = document.createElement('p');
      number_likes.classList.add('number_likes');
      var likes = post.likes;
      number_likes.textContent = likes;
        number_likes.innerHTML ='<span class="likes">' + likes + '</span> відміток "Подобається"';
        container.appendChild(article);
        article.appendChild(number_likes);     
       
    putСomments(article);
    moreComments(article);
    putСomments(article);
     
   
} 

function putСomments(article){
  var comment = document.createElement('div');
  comment.classList.add('comment');
  var p = document.createElement('p');
  p.classList.add('article_comments');
  p.innerHTML='For six decades, NASA has led the peaceful exploration of space, making discoveries about our planet, solar system, and universe. This week, we highlight the first “A” in NASA: aeronautics—the science of travel through the air.<a href="#">ще...</a>';
  article.appendChild(comment);
  comment.append(p);
}
 
function moreComments(article){    
  var a = document.createElement('div');
  a.innerHTML='<a href="...">Завантажити коментарі ще...</a>'; 
  article.append(a);
 }
 
 function putIcons(article){
    var icon = document.createElement('div');
    icon.classList.add('rowicons');
    var heart = document.createElement('span');
    var com =document.createElement('span');
    var down = document.createElement('span');
    var bookmark = document.createElement('span');

      heart.innerHTML='<i class="far fa-heart fa-lg"></i>';
      com.innerHTML='<i class="far fa-comment fa-lg"></i>';
      down.innerHTML='<i class="fas fa-share-square fa-lg"></i>';
      bookmark.innerHTML='<i class="far fa-bookmark fa-lg"></i>';

      article.appendChild(icon);
      icon.append(heart);
      icon.append(com);
      icon.append(down);
      icon.append(bookmark);

      heart.addEventListener('click', function(e) {
          var parent = e.target.closest('.article');
          console.log(parent);
          var child = parent.getElementsByClassName('likes')[0];
          var likesNumber = Number(child.innerHTML);
          console.log(likesNumber);
          console.log(child);


        if (e.target.classList.contains('far')) {          
            e.target.classList.remove('far');
            e.target.classList.add('fas', 'active');
            likesNumber++;
            child.innerHTML = likesNumber;
            
          } else{
              e.target.classList.remove('fas', 'active');
              e.target.classList.add('far');
              likesNumber--;
              child.innerHTML = likesNumber;
            }                       
      })

 }

 function dropDownMenu(title){
    var dropdown = document.createElement('div');
    dropdown.setAttribute('class', 'dropdown');
    var button = document.createElement('button');
    button.setAttribute('class', 'btn btn-secondary', 'type','button', 'id','dropdownMenu2', 'data-toggle','dropdown', 'aria-haspopup','true','aria-expanded','false');
    var fon = document.createElement('i');
    fon.setAttribute('class','fas fa-ellipsis-h menu');
    var dropdown_menu=document.createElement('div');
    dropdown_menu.setAttribute('class','dropdown-menu','aria-labelledby','dropdownMenu2')
    var menu_buttonADD = document.createElement('button');
    menu_buttonADD.setAttribute('class','dropdown-item','type','button');
    menu_buttonADD.textContent='ADD';
    var menu_buttonDELETE = document.createElement('button');
    menu_buttonDELETE.setAttribute('class','dropdown-item','type','button');
    menu_buttonDELETE.textContent='DELETE';

    title.appendChild(dropdown);
    dropdown.appendChild(button);
    button.appendChild(fon);
    dropdown.appendChild(dropdown_menu);
    dropdown_menu.appendChild(menu_buttonADD);
    dropdown_menu.appendChild(menu_buttonDELETE);
 }



 