<!DOCTYPE html>
<html lang="fr">
<head>
  <title>NetSuivi</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="shortcut icon" type="image/png" href="https://www.paulseignabou.fr/netsuivi/favicon.ico" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.6/Chart.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <link rel="stylesheet" href="https://www.paulseignabou.fr/template-webapp/config/style.css" />
  <link rel="stylesheet" href="config/style-custom.css" />
</head>

  <?php
  $path = $_SERVER['PHP_SELF'];
  $title = basename ($path);
  if ($title == "index.php") { ?>
    <body class="home">
      <?php } else { ?>
    <body class="not-home">
      <div id="toggle">
      </div>
      <nav class="sidebar d-flex flex-wrap align-items-center animated animTop">
        <a class="navbar-brand" href="https://www.paulseignabou.fr/netsuivi/dashboard.php">
          <img src="images/icons/logo.svg" alt="logo client" class="logo">
        </a>
        <ul class="nav flex-column mainNav">
          <li class="nav-item">
            <a href="https://www.paulseignabou.fr/netsuivi/dashboard.php" class="nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="671"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
              <span>Accueil</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="https://www.paulseignabou.fr/netsuivi/demandes.php" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              <span>Demandes</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link customCollapse" id="demandeMenu-tab" data-toggle="pill" href="#demandeMenu" role="tab" aria-controls="demandeMenu" aria-selected="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              <span>Documents</span>
            </a>
          </li>
          <li class="nav-item">
           <a class="nav-link customCollapse" id="statMenu-tab" data-toggle="pill" href="#statMenu" role="tab" aria-controls="statMenu" aria-selected="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <span>Statistiques</span>
            </a>
          </li>
        </ul>
        <div class="tab-content customMenu" id="customMenu">
          <span class="toggle close"></span>
        <div class="tab-pane fade" id="demandeMenu" role="tabpanel" aria-labelledby="demandeMenu-tab">
          <h3 class="text-custom">Documents</h3>
          <ul class="nav flex-column">
            <li><a href="/netsuivi/documents.php#menu0">
              <svg class="text-customBlue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-reactid="556"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
              <span>Fiche de livraison</span>
              </a></li>
            <li><a href="/netsuivi/documents.php#menu1">
              <svg class="text-customYell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path></svg>
              <span>Formation</span>
              </a></li>
            <li><a href="/netsuivi/documents.php#menu2">
             <svg class="text-customGreen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              <span>Manuel utilisateur</span>
              </a></li>
            <li><a href="/netsuivi/documents.php#menu3">
             <svg class="text-custom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg>
              <span>Release note</span>
              </a></li>
          </ul>
        </div>
        <div class="tab-pane fade" id="statMenu" role="tabpanel" aria-labelledby="statMenu-tab">
          <h3 class="text-custom">Statistiques</h3>
          <ul class="nav flex-column">
            <li><a href="/netsuivi/statistiques.php#menu0">
                <svg class="text-customBlue" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
              <span>Global</span>
              </a></li>
            <li><a href="/netsuivi/statistiques.php#menu1">
              <svg class="text-customYell" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>Mensuelles</span>
              </a></li>
            <li><a href="/netsuivi/statistiques.php#menu2">
              <svg class="text-customGreen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line></svg>
              <span>Tickets</span>
              </a></li>
            <li><a href="/netsuivi/statistiques.php#menu3">
              <svg class="text-custom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              <span>Tickets utilisation</span>
              </a></li>
          </ul>
        </div>
        </div>
        <ul class="user d-flex">
          <li class="d-flex align-items-center">
            <!-- <svg class="feather feather-user sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> -->
            <span class="bg-cover" style="background-image: url('https://demos.creative-tim.com/material-kit/assets/img/faces/christian.jpg');"></span>
            <ul>
              <li class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#customersList"><i class="far fa-list-alt"></i> Cogedim</li>
              <li><a href="profil.php">Mon Profil</a></li>
              <li><a href="https://www.paulseignabou.fr/netsuivi/">Déconnexion</a></li>
            </ul>
          </li>
        </ul>
      </nav>

     <?php if ($title != "dashboard.php") { ?>
        <nav class="flex-row-reverse navbar fixed-top navbar-expand-lg" id="main-search">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
      <?php }?> <!-- != dashboard -->
  <?php }?> <!-- == not-home -->
