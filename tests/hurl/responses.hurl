# responses.hurl
#
# Validate public redirects and response headers.
# Run with: npm run test:responses

# dresscss alias redirects to dress.css root
HEAD {{base_url}}/dresscss
HTTP 301
Location: /dress.css/

# dresscss alias CSS path redirects to canonical CSS asset
HEAD {{base_url}}/dresscss/dress.css
HTTP 301
Location: /dress.css/dress.css

# semcss alias redirects to dress.css root
HEAD {{base_url}}/semcss
HTTP 301
Location: /dress.css/

# semcss alias CSS path redirects to canonical CSS asset
HEAD {{base_url}}/semcss/dress.css
HTTP 301
Location: /dress.css/dress.css

# sem.css alias redirects to dress.css root
HEAD {{base_url}}/sem.css
HTTP 301
Location: /dress.css/

# sem.css alias CSS path redirects to canonical CSS asset
HEAD {{base_url}}/sem.css/dress.css
HTTP 301
Location: /dress.css/dress.css

# Legacy /demo path redirects to the specimen showcase
HEAD {{base_url}}/demo
HTTP 301
Location: /dress.css/specimen/

# Legacy /dress.css/demo path redirects to the specimen showcase
HEAD {{base_url}}/dress.css/demo/
HTTP 301
Location: /dress.css/specimen/
