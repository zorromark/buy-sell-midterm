/*
 * All routes for Widgets are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `
    SELECT * FROM favorites
    JOIN items ON item_id = items.id
     WHERE user_id = 1;`; //add items db using join
    console.log(query);
    db.query(query)
      .then(data => {
        console.log(data.rows);
        const favorites = data.rows;
        res.render("favorites", {favorites});
        //res.json({ items });
        //res.json({ favorites });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
