import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

import {
  Container,
  Col,
  Row,
  Button,
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  NavbarToggler,
  Collapse,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Badge,
} from "reactstrap";
import { Link, Route, Switch } from "react-router-dom";

// Faire un composant sidebar avec router etc..
// dans le return de post, integrer la sidebar dans une col 3 comme deja present.
// integrer un composant content dans ce meme return en tant  que col 9 (ou moins ?) = router switch
// Au clic sur un element de la sidebar, le router declenche le lien et charge le composant introduction / git/ etc. dans le content

function Introduction() {
  return (
    <Row style={{ backgroundColor: "white", marginTop: "10px" }}>
      <h4 style={{ fontWeight: "bold" }}>Intro</h4>
      <p>
        Ce guide contient les <b>lignes de commandes</b> essentielles pour démarrer un projet React / React Native.
        <br />
        <b>Pour les Alumnis de la Capsule :</b> Vous y trouverez aussi les liens vers
        les cours de la Capsule pour avoir un accès rapide aux ressources
        pédagogiques.
        <br />
        Pensez à vous connecter à Ariane avant de consulter les liens.
      </p>
    </Row>
  );
}
function Git() {
  return (
    <Row
      style={{ backgroundColor: "white", marginTop: "10px", padding: "10px" }}
    >
      <h4 style={{ fontWeight: "bold" }}> 💾 Git</h4>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Initialisation de git :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        mkdir newproject
        <br />
        cd new project
        <br />
        git init
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Effectuer un commit :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        git add fileName{" "}
        <span style={{ color: "grey" }}>// ajout d'un seul fichier</span>
        <br />
        git add .{" "}
        <span style={{ color: "grey" }}>// ajout de tous les fichiers</span>
        <br />
        git commit -m "first commit"
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Branches :</p>

      <p style={{ backgroundColor: "ghostwhite" }}>
        git branch yourbranchname{" "}
        <span style={{ color: "grey" }}>
          // Voir les fichiers modifiés non commit
        </span>
        <br />
        git branch{" "}
        <span style={{ color: "grey" }}>
          // Lister l'ensemble des branches
        </span>{" "}
        <br />
        git branch checkout yourbranchname{" "}
        <span style={{ color: "grey" }}>// Basculer sur une branche</span>{" "}
        <br />
        git merge yourbranchtomerge
        <br />
        git branch -d yourbranchname{" "}
        <span style={{ color: "grey" }}>// Supprimer une branche</span> <br />
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        {" "}
        Push/Pull sur github :
      </p>

      <p style={{ backgroundColor: "ghostwhite" }}>
        git remote add origin https://urlDuDepot.git{" "}
        <span style={{ color: "grey" }}>
          // Associer le repo local au repo distant
        </span>
        <br />
        git push origin main
        <br />
        git pull origin main
        <br />
        git remote -v{" "}
        <span style={{ color: "grey" }}>
          // Lister les liaisons du repo local
        </span>{" "}
        <br />
        git remote rm origin{" "}
        <span style={{ color: "grey" }}>// Supprimer une liaison</span> <br />
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Annuler un commit :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        git reset --soft HEAD~1{" "}
        <span style={{ color: "grey" }}>// Sur le repo local</span>
        <br />
        git revert HEAD{" "}
        <span style={{ color: "grey" }}>// Sur le repo distant</span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Gérer des branches sur le repo distant{" "}
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        git push origin branchdev{" "}
        <span style={{ color: "grey" }}>
          // Envoyer la branche sur une branche du repo distant
        </span>
        <br />
        git push origin --delete branchdev{" "}
        <span style={{ color: "grey" }}>
          // Supprimer une branche sur le dépôt distant
        </span>
        <br />
        git fetch origin
        <span style={{ color: "grey" }}>
          // Lister les branches du repo distant
        </span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Commandes utiles :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        git branch -m main 
        <span style={{ color: "grey" }}>
          // Donner le nom main à sa branche master
        </span>
        <br/>
        git status{" "}
        <span style={{ color: "grey" }}>
          // Voir les fichiers modifiés non commit
        </span>
        <br />
        git log <span style={{ color: "grey" }}>
          // Historique des commits
        </span>{" "}
        <br />
        git diff HEAD{" "}
        <span style={{ color: "grey" }}>// Comparer les versions</span> <br />
        git show 22c312fc04fe39fe376a0b95f1d486158f3ae4a4{" "}
        <span style={{ color: "grey" }}>// Plus d'infos sur un commit</span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Liens Ariane :</p>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5ba33d3535f8c808cb799cd7"
      >
        Week 1 > Day 4 > Démarrer avec Git
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/605b18d32a0a9f1e747596c1"
      >
        Week 1 > Day 4 > Les branches avec Git
      </a>
    </Row>
  );
}
function Express() {
  return (
    <Row
      style={{ backgroundColor: "white", marginTop: "10px", padding: "10px" }}
    >
      <h4 style={{ fontWeight: "bold" }}> 🔋 Express</h4>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installer Express de façon globale
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        npm install express-generator -g
      </p>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installer Express de façon globale
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        express --view=ejs --git myapp{" "}
        <span style={{ color: "grey" }}>// Création du projet express</span>
        <br />
        cd myapp
        <br />
        npm install{" "}
        <span style={{ color: "grey" }}>// Installer les modules</span>
        <br />
        npm start{" "}
        <span style={{ color: "grey" }}>
          // Démarre le serveur sur http://localhost:3000
        </span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installer Express Sessions
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        npm install --save express-session
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Importer Express Sessions
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        <span style={{ color: "grey" }}>
          // Dans le fichier <b>app.js</b>
        </span>
        <br />
        var indexRouter = require('./routes/index');
        <span style={{ color: "grey" }}> // Déjà dans le fichier</span>
        <br />
        var usersRouter = require('./routes/users');
        <span style={{ color: "grey" }}> // Déjà dans le fichier</span>
        <br />
        var session = require("express-session");
        <span style={{ color: "grey" }}>
          {" "}
          // Ajouter ces deux lignes avant la ligne 10
        </span>
        <br />
        <span>var app = express();</span>
        <br />
        <span style={{ color: "grey" }}>
          {" "}
          // Toujours dans app.js, ajouter ce bloc :
        </span>
        <br />
        <span>app.use(</span>
        <br />
        <span>session{"{("}</span>
        <br />
        <span>secret: 'a4f8071f-c873-4447-8ee2',</span>{" "}
        <span style={{ color: "grey" }}>
          {" "}
          // Penser à changer la clé secrète
        </span>
        <br />
        <span>resave: false,</span>
        <br />
        saveUninitialized: false,
        <br />
        <span>{"}));"}</span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installer Stripe
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>npm install --save stripe</p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Webservices : installer le module sync-request
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        npm install sync-request --save{" "}
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        MongoDB : installer le module mongoose
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        npm install mongoose --save
        <br />
        <span style={{ color: "grey" }}>
          {" "}
          // Si vous déportez la logique de connexion dans un fichier
          connect.js, ajouter la ligne suivante tout en haut du fichier app.js
        </span>
        <br />
        {"require('./models/connect');"}
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Liens Ariane :</p>
      <a
        target="_blank"
        href=" https://ariane.lacapsule.academy/batch/slide/5ba9dcb3bc39fa7aae297908
"
      >
        Week 2 > Day 2 > Démarrer avec Express
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bac8124e7e9cb282e7b86b6"
      >
        Week 2 > Day 2 > Les sessions
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/6065f37dc71714a5274375bb"
      >
        Week 2 > Day 5 > Stripe
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bac8124e7e9cb282e7b86b6"
      >
        Week 3 > Day 2 > Web services
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/6062d47bc71714a5274375ba
"
      >
        Week 3 > Day 3 > Mongoose
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c31fe31539613083eaede3c
"
      >
        Week 3 > Day 3 > Modèle MVC
      </a>
    </Row>
  );
}
function Heroku() {
  return (
    <Row
      style={{ backgroundColor: "white", marginTop: "10px", padding: "10px" }}
    >
      <h4 style={{ fontWeight: "bold" }}> 🌐 Heroku</h4>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installer Heroku sur la machine
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        <a
          style={{ color: "black", textDecoration: "none" }}
          target="_blank"
          href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up"
        >
          https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
        </a>
        <br />
        <span style={{ color: "grey" }}>
          {" "}
          // Suivre les instructions via le lien ci-dessus.
        </span>
      </p>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Initialisation du projet :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        git init<span style={{ color: "grey" }}> // Initialiser git</span>
        <br />
        heroku login
        <span style={{ color: "grey" }}> // Connexion à Heroku</span>
        <br />
        heroku create
        <span style={{ color: "grey" }}>
          {" "}
          // Lier le repo local au repo Heroku
        </span>
        <br />
        git push heroku main{" "}
        <span style={{ color: "grey" }}>// Push sur Heroku</span>
        <br />
        heroku open{" "}
        <span style={{ color: "grey" }}>
          // Ouvrir l'app dans le navigateur
        </span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Debugger avec Heroku:
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        heroku logs --tail
        <span style={{ color: "grey" }}>
          {" "}
          // Accéder aux logs en temps réel
        </span>
        <br />
        heroku logs -n 200
        <span style={{ color: "grey" }}>
          {" "}
          // Accéder aux 200 dernières lignes de logs
        </span>
      </p>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Sécuriser ses variables d'environnement :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        <span style={{ color: "grey" }}> // Créer un fichier .env</span>
        <br />
        BDD_LOGIN = "toto"
        <br />
        BDD_PASSWORD = "azerty"
        <br />
        heroku config:set BDD_LOGIN=toto --remote test
        <span style={{ color: "grey" }}> // Configuration Heroku</span>
        <br />
        heroku config
        <span style={{ color: "grey" }}>
          {" "}
          // Voir l'ensemble des variables d'environnement
        </span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>Avec Express :</p>
      <p style={{ backgroundColor: "ghostwhite" }}>
        npm install --save dotenv
        <br />
        <span style={{ color: "grey" }}>
          {" "}
          // Dans le fichier routes (index.js)
        </span>
        <br />
        {'const dotenv = require("dotenv");'}
        <br />
        {"dotenv.config();"}
        <br />
        const BDD_LOGIN = process.env.BDD_LOGIN;
        <br />
        const BDD_PASSWORD = process.env.BDD_PASSWORD;
      </p>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Liens Ariane :</p>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5badd1bbf504cf48b5b0d9cb"
      >
        Week 2 > Day 5 > Heroku
      </a>
    </Row>
  );
}
function ReactC() {
  return (
    <Row
      style={{ backgroundColor: "white", marginTop: "10px", padding: "10px" }}
    >
      <h4 style={{ fontWeight: "bold" }}> 💻 React</h4>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation de React :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npx create-react-app my-app-name --use-npm
        <br />
        cd first-app
        <br />
        npm start
        <br />
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
       React Router DOM
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install --save react-router-dom@5
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
       Redux
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install --save redux react-redux
    </p>
    <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
       Token Utilisateur et Chiffrage : uid2 et bcrypt
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install --save bcrypt uid2
    </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Liens Ariane :</p>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bc34a4aeb7b6c032272372e"
      >
        Week 5 > Day 1 > React JS
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bc34b30eb7b6c0322723730"
      >
        Week 5 > Day 1 > Les composants et JSX
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5d9ceac18f5cbb001a5a9fa5"
      >
        Week 6 > Day 1 > React Router DOM
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bd2be7564f409c2dce46ed2"
      >
        Week 6 > Day 3 > Redux
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c66ad3027023c0022ed434a"
      >
        Week 6 > Day 4 > Optimisation et sécurité
      </a>
    </Row>
  );
}
function ReactNative() {
  return (
    <Row
      style={{ backgroundColor: "white", marginTop: "10px", padding: "10px" }}
    >
      <h4 style={{ fontWeight: "bold" }}> 📱 React Native</h4>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation de React Native & Expo :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install -g expo-cli <span style={{ color: "grey" }}>
          {" "}
          // Si vous êtes sur MAC OS, utilisez sudo !
        </span>
              <br />
        expo init monApplication
        <br />
        cd monApplication
        <br />
        expo start
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation de React Navigation
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install @react-navigation/native@5 --save
        <br />
        expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
        <span style={{ color: "grey" }}>
          {" "}
          // Installation des dépendances
        </span>
        <br />
        npm install @react-navigation/stack@5 --save
        <span style={{ color: "grey" }}>
          {" "}
          // Installation de la stack navigation
        </span>
        <br />
        npm install @react-navigation/bottom-tabs@5 --save
        <span style={{ color: "grey" }}>
          {" "}
          // Installation de la bottom tab navigation
        </span>
              </p>
              <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation de React Native Elements
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install @rneui/themed @rneui/base
              </p>

        <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation des modules pour la géolocalisation :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
     expo install react-native-maps expo-location expo-permissions
      </p>

      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        WebSockets & Chat
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install socket.io --save <span style={{color:"grey"}}> //backend side</span>
      <br/>
      <span style={{color:"grey"}}> //Dans le fichier www{' (bin/www)'}</span>
      <br/>
      {"var io = require('socket.io')(server);"}
      <br/>
      {"io.on('connection', function(socket){console.log('a user connected');});"}
      <br/>
      npm install --save socket.io-client <span style={{color:"grey"}}> //frontend side</span>
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Local Storage : 
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      npm install @react-native-async-storage/async-storage --save
      </p>
      
        <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Installation du module expo Camera :
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      expo install expo-camera 
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}>
        Mise en place d'expo file system, uniqid et Cloudinary
      </p>
      <p style={{ backgroundColor: "ghostwhite" }}>
      <span style={{color:"grey"}}> //Toutes les installations se font dans le backend le backend :</span>
        <br/>
      npm install --save express-fileupload 
      <br/>
      <span style={{color:"grey"}}> //Dans app.js {"(backend)"} :</span>
     <br/>
     {"var fileUpload = require('express-fileupload');"}
     <span style={{color:"grey"}}> // app.js ligne 1 </span>
     <br/>
     {"app.use(fileUpload());"}
     <span style={{color:"grey"}}> // app.js, après {"var app = express()"} </span>
     <br/>
     npm install --save uniqid <span style={{color:"grey"}}> // Permet de générer un id unique </span>
     <br/>
     npm install --save cloudinary
      </p>
      <p style={{ marginBottom: "2px", fontWeight: "bold" }}> Liens Ariane expo init my-project —npm:</p>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c3266716118cb0015cd6920"
      >
        Week 7 > Day 2 > React Native & Expo
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bd0ebf56f43f6b3cc2d5a3f"
      >
        Week 7 > Day 2 > React Navigation
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5bd0ec1d6f43f6b3cc2d5a41"
      >
        Week 7 > Day 2 > Champs de saisie avec React Native
      </a>
       <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c31f32d0ee6d60015de8772
        "
      >
        Week 7 > Day 3 > Map et géolocalisation
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c31f3650ee6d60015de8776
        "
      >
        Week 7 > Day 4 > Web Sockets & Chat
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c31f3b80ee6d60015de877a
        "
      >
        Week 7 > Day 5 > Local storage
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c31f4180ee6d60015de8782
        "
      >
        Week 8 > Day 2 > La Caméra
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c74f58441edc20022f65f73
        "
      >
        Week 8 > Day 3 > Backend : Réception de fichier
      </a>
      <a
        target="_blank"
        href="https://ariane.lacapsule.academy/batch/slide/5c4975ef1902aae85e4b8522
        "
      >
        Week 8 > Day 3 > Cloudinary
      </a>

    </Row>
  );
}
function Content() {
  return (
    <Switch>
      <Route path="/post/intro" component={Introduction} />
      <Route path="/post/git" component={Git} />
      <Route path="/post/express" component={Express} />
      <Route path="/post/heroku" component={Heroku} />
      <Route path="/post/react" component={ReactC} />
      <Route path="/post/react-native" component={ReactNative} />
    </Switch>
  );
}

function Sidebar() {
  const [isSelected, setIsSelected] = useState(1);
 

  return (
    <Nav pills vertical style={{marginLeft:" 8%"}}>
      <NavItem>
        <Link to="/post/intro">
          <NavLink onClick={() => setIsSelected(1)} active={isSelected === 1}>
            Intro
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/post/git">
          <NavLink onClick={() => setIsSelected(2)} active={isSelected === 2}>
            Git
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/post/express">
          <NavLink onClick={() => setIsSelected(3)} active={isSelected === 3}>
            Express
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/post/heroku">
          <NavLink onClick={() => setIsSelected(4)} active={isSelected === 4}>
            Heroku
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/post/react">
          <NavLink onClick={() => setIsSelected(5)} active={isSelected === 5}>
            React
          </NavLink>
        </Link>
      </NavItem>
      <NavItem>
        <Link to="/post/react-native">
          <NavLink onClick={() => setIsSelected(6)} active={isSelected === 6}>
            React Native
          </NavLink>
        </Link>
      </NavItem>
    </Nav>
  );
}

function Post() {
  return (
    <Container
      fluid
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "ghostwhite",
        minHeight: "100vh",

      }}
    >
      <Col xs="12" style={{ marginBottom: "10px", marginTop: "10px" }}>
        <Row>
          <Col md="3">
            <Sidebar />
          </Col>
          <Col md="6">
            <h2 style={{ marginTop: "10px" }}>
              {" "}
              ✌️ Cheat Sheet - Set Up Commands
            </h2>
            <Content />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}
export default Post;
