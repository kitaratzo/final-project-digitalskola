# Final Project - Developer Portfolio

Ini adalah proyek akhir yang dibuat untuk kebutuhan bootcamp cloud engineer, menampilkan personal developer portfolio yang dibangun dengan React (Next.js), serta di-deploy ke AWS menggunakan CI/CD, containerization, dan monitoring yang lengkap.
## 🚀 Konfigurasi AWS

- Route 53
<img width="1090" height="293" alt="image" src="https://github.com/user-attachments/assets/182b3816-cfe6-4ed5-bb1a-68b3415aeaf5" />
- Application Load Balancing
<img width="1090" height="349" alt="image" src="https://github.com/user-attachments/assets/bc8d8e1f-f76e-4761-88f8-e2052ce940dd" />
- Target Group
<img width="1090" height="536" alt="image" src="https://github.com/user-attachments/assets/9e7cfd08-1225-461f-a5c6-cf785845da03" />
- Auto Scaling Group
<img width="1090" height="563" alt="image" src="https://github.com/user-attachments/assets/39a568f2-6f6d-4f80-ba90-48430eb6e9d2" />
<img width="1090" height="290" alt="image" src="https://github.com/user-attachments/assets/fa5b6527-397b-4957-a3f0-1a3e7f1e16b2" />
- EC2 Instance
<img width="1090" height="1139" alt="image" src="https://github.com/user-attachments/assets/7677e23e-c358-4081-99f3-c84f34e0896c" />
- Key Pair
<img width="1636" height="513" alt="image" src="https://github.com/user-attachments/assets/d25f0d31-2005-4b7f-bd48-703ea57cc315" />
- Security Group
<img width="1851" height="487" alt="image" src="https://github.com/user-attachments/assets/049499b3-aeb6-426f-8aa9-58d8caafc4fa" />




## 🌐 Live Demo

> 🔗 [https://chandra-insan.site](https://chandra-insan.site)
<img width="3404" height="1323" alt="image" src="https://github.com/user-attachments/assets/c93b59e9-ec9a-4abb-b558-2f11ef3c9f8b" />

## 📦 Repository

> 🔗 [https://github.com/kitaratzo/final-project-digitalskola](https://github.com/kitaratzo/final-project-digitalskola)

## 🚀 Teknologi yang Digunakan

- **Frontend**: Next.js (React)
- **Styling**: Tailwind CSS
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Infrastructure**: AWS EC2, ALB, Auto Scaling Group
- **Monitoring**: Prometheus, Grafana, cAdvisor
- **Log Monitoring**: Loki + Promtail
- **Domain**: Route 53 (chandra-insan.site)

## 📁 Struktur Proyek

```
.
├── app/                 # Folder utama halaman (Next.js App Router)
├── components/          # Komponen UI
├── public/              # Asset statis
├── styles/              # Styling global (Tailwind)
├── Dockerfile           # Konfigurasi Docker build
├── prometheus.yml       # Konfigurasi monitoring Prometheus
├── .github/workflows/   # CI/CD GitHub Actions
└── README.md            # Dokumentasi ini
```

## ⚙️ Cara Menjalankan di Lokal

### 1. Clone Repo

```bash
git clone https://github.com/kitaratzo/final-project-digitalskola.git
cd final-project-digitalskola
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Jalankan di Lokal

```bash
npm run dev
```

Akses: [http://localhost:3000](http://localhost:3000)

## 🐳 Docker

### Build Docker Image

```bash
docker build -t kitaratzo/final-project-portfolio:latest .
```

### Run Container

```bash
docker run -d -p 80:3000 --name app --restart always kitaratzo/final-project-portfolio:latest
```
<img width="1956" height="173" alt="image" src="https://github.com/user-attachments/assets/26d6c83f-7be9-4b2a-add8-92f6aadf07d5" />

## 🔁 CI/CD Pipeline

Setiap push ke branch `main` akan:
1. Build Docker image
2. Push ke Docker Hub
3. SSH ke EC2
4. Pull image dan restart container

File workflow:
```bash
.github/workflows/deploy.yml
```

## 📈 Monitoring

| Tool        | Fungsi                                |
|-------------|----------------------------------------|
| Prometheus  | Monitoring metrics dari container      |
| cAdvisor    | Resource usage untuk container Docker  |
| Grafana     | Visualisasi monitoring & logs          |
| Loki        | Penyimpanan dan pencarian log          |
| Promtail    | Pengumpul log dari container           |

URL:
- 🔎 Grafana: [http://monitoring.chandra-insan.site](http://monitoring.chandra-insan.site)

## 🧪 Dashboard

Terdapat 2 dashboard utama di Grafana:

1. **Resource Monitoring (CPU, RAM, Container Health)**
<img width="3018" height="1131" alt="image" src="https://github.com/user-attachments/assets/99d43804-e402-403f-9ac2-9ec3a7986e81" />

3. **Log Viewer (Loki Promtail)** – memantau error log, status runtime, dsb.
<img width="3032" height="1256" alt="image" src="https://github.com/user-attachments/assets/8a7f55e5-122e-43e3-9a1c-f8785fd7b95f" />


## 👨‍💻 Kontributor

- Nama: **Chandra Insan Prasetyo**
- Email: chandra.insan@gmail.com
- GitHub: [@kitaratzo](https://github.com/kitaratzo)

## 📄 Thanks to
[Adam Neves](https://github.com/adamsnows)
