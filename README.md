# express_mongodb
 Rest api dengan ExpressJS dan MongoDB beserta clean architecturenya
# Package
 - body-parser
 - cors
 - dotenv
 - express
 - mongoose
 - bcrypt
 - jsonwebtoken
 - jest
 - module-alias
# Alur routes
 - index.js (folder root project)
 - index.js (folder routes)
 - routes.js (folder app/v1)
 - routes.js (folder app/v1/modules/pegawai)
# Alur coding modules
 controller -> service -> repository
 - controller untuk interaksi dengan routes
 - service penanganan logic/alur bisnis
 - repository untuk interaksi dengan database