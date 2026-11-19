# 1. Этап сборки (SDK .NET 8)
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY . .
# Публикуем проект. Имя проекта берем из твоего csproj (QR-code.csproj)
RUN dotnet publish QR-code/QR-code.csproj -c Release -o /app

# 2. Этап запуска (Runtime .NET 8)
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app
COPY --from=build /app .

# Устанавливаем библиотеки для System.Drawing.Common (чтобы твой QR-код работал на Linux)
RUN apt-get update && apt-get install -y libgdiplus libc6-dev

# Render требует, чтобы приложение слушало порт 8080 (или тот, что даст Render)
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

# Запускаем твой dll. Обрати внимание: имя файла = имя проекта
ENTRYPOINT ["dotnet", "QR-code.dll"]
