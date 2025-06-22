# Kütüphaneler

- react
- typescript
- react-router-dom
- axios
- @tanstack/react-query
- tailwindcss
- react-icons
- formik
- yup

- FİGMA
- https://www.figma.com/community/file/1214498651988846999/kicks-shoes-ecommerce-website-and-admin-mvp

# Token Yönetimi

## En güvenli ve performanslı yöntem:

- Acces Token'ı cookie içerisinde sakla
- Refresh Token'ı HttpOnly cookie olarak backend yönetsin
- 401 olursa otomatik token yenileme mekanizması ekle
- Logout olduğunda tokenları temizle ve backend'e bildir.
