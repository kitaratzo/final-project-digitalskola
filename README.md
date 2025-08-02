# Final Project - Developer Portfolio

Ini adalah proyek akhir yang dibuat untuk kebutuhan bootcamp cloud engineer, menampilkan personal developer portfolio yang dibangun dengan React (Next.js), serta di-deploy ke AWS menggunakan CI/CD, containerization, dan monitoring yang lengkap.
## 🚀 Konfigurasi AWS

- Route 53
- Application Load Balancing
- Target Group
- Auto Scaling Group
- EC2 Instance
- Key Pem
- Security Group

## 🌐 Live Demo

> 🔗 [https://chandra-insan.site](https://chandra-insan.site)

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
2. **Log Viewer (Loki Promtail)** – memantau error log, status runtime, dsb.

## 👨‍💻 Kontributor

- Nama: **Chandra Insan Prasetyo**
- Email: chandra.insan@gmail.com
- GitHub: [@kitaratzo](https://github.com/kitaratzo)

## 📄 Thanks to
[Adam Neves](https://github.com/adamsnows)
