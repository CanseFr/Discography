/**
 * Renvoie une valeur en fonction du thème actuellement détecté.
 * @param darkParam {string | number} - La valeur à renvoyer si le thème est "dark".
 * @param lightParam {string | number} - La valeur à renvoyer si le thème est "light".
 * @returns {string | number} - `darkParam` si le thème est "dark", sinon `lightParam`.
 *
 * Exemple d'utilisation :
 * const color = defineDependingTheme("#000000", "#FFFFFF");
 * console.log(color); // Renvoie "#000000" si le thème est "dark", sinon "#FFFFFF".
 */

export const defineDependingTheme = (darkParam: string|number, lightParam: string|number) =>{
    return localStorage.getItem("mui-mode") === 'dark' ?  darkParam : lightParam
}


/**
 * Recharge la page pour synchroniser le thème avec les iframes de Bandcamp.
 *
 * Cette méthode est nécessaire car les iframes de Bandcamp ne se rechargent pas automatiquement
 * lorsque le thème MUI change. Elle force un rechargement complet de la page pour garantir que
 * le thème est correctement appliqué sur toutes les parties de la page, y compris les iframes.
 *
 * La page est rechargée uniquement si l'utilisateur est sur l'une des URL suivantes :
 * - "/disco"
 * - "/sample"
 * - "/"
 *
 * Exemple d'utilisation :
 * reloadPageToRefreshTheme();
 * // Recharge la page si l'URL actuelle est "/disco", "/sample", ou "/".
 */

export const reloadPageToRefreshTheme =() =>{
    const pathsToReload = ["/disco", "/sample", "/"];
    if (pathsToReload.includes(window.location.pathname)) {
        window.location.reload();
    }
}