# Portfolio – Đặng Thành Tuấn

Trang tĩnh (HTML/CSS/JS thuần, không cần build), triển khai thẳng lên GitHub Pages.

```
index.html          nội dung trang
style.css           giao diện (sáng/tối tự động)
script.js           nút đổi theme + phóng to ảnh
assets/cv/          file CV PDF (nút "Download CV")
assets/img/         ảnh minh chứng, ảnh dự án, ảnh đại diện
.nojekyll           để GitHub Pages phục vụ file nguyên trạng
```

## Thêm ảnh

Chỉ cần chép ảnh vào đúng đường dẫn dưới đây, không phải sửa HTML. Khi chưa có ảnh, ô ảnh đó tự ẩn đi; chép file vào là ảnh tự hiện.

| Ảnh | Đường dẫn | Trạng thái |
|---|---|---|
| Ảnh chân dung | `assets/img/profile/avatar.jpg` | đã có (cắt từ aws_avatar.jpg) |
| Ảnh xem trước khi chia sẻ link | `assets/img/profile/og-cover.jpg` | đã có |
| Sơ đồ MD-GraphRAG | `assets/img/projects/md-graphrag.png` | chưa có (16:9) |
| Ảnh chụp SlotHub | `assets/img/projects/slothub.png` | chưa có (16:9) |
| Sơ đồ pipeline Jetson | `assets/img/projects/jetson-racer.jpg` | đã có |
| Thư chấp nhận EAI FISAT | `assets/img/awards/eai-fisat-acceptance.jpg` | chưa có |
| 12 giấy chứng nhận (Jetson, Datathon, SEAL, Startup Challenge, AICCC, Swin, Data Storm) | `assets/img/certificates/` | đã có, lấy từ `2. CERTIFICATE` và nén còn ~1.5 MB |
| Ảnh nhận giải Datathon, SEAL | `assets/img/awards/` | đã có |
| Ảnh mục Moments | `assets/img/moments/` | đã có 8 ảnh; thêm ảnh mới bằng một dòng `<figure>` trong khối `class="moments"` |
| 8 giấy khen cấp 3 và 4 chứng chỉ CodeLearn | `assets/img/highschool/` | đã có, cắt từ ảnh ghép trong `ẢNH CHỨNG MINH THÀNH TÍCH` |

Thêm chứng nhận mới vào mục *Certificates*: chép ảnh vào `assets/img/certificates/` rồi thêm một dòng `<figure>` trong khối `class="gallery"` của `index.html`.

Muốn đổi tên file hay thêm ảnh mới, sửa `src` của thẻ `<img>` tương ứng trong `index.html` (mỗi chỗ có comment `PLACEHOLDER`). Các chỗ cần bổ sung nội dung được đánh dấu `TODO` (link repo/video Jetson, LinkedIn).

## Xem thử trên máy

```bash
python3 -m http.server 8000
```

Rồi mở http://localhost:8000.

## Đưa lên GitHub Pages

1. Tạo repo tên `tuandang304.github.io` (để có địa chỉ https://tuandang304.github.io) hoặc tên bất kỳ.
2. Đẩy code lên:
   ```bash
   git init && git add . && git commit -m "Portfolio" && git branch -M main
   git remote add origin https://github.com/tuandang304/tuandang304.github.io.git
   git push -u origin main
   ```
3. Vào **Settings → Pages**, chọn *Deploy from a branch*, nhánh `main`, thư mục `/ (root)`.
