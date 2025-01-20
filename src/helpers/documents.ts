import {
  DocumentIcon,
  FormatAudioIcon,
  FormatCmdIcon,
  FormatCssIcon,
  FormatCsvIcon,
  FormatDocIcon,
  FormatExcelIcon,
  FormatGifIcon,
  FormatHtmlIcon,
  FormatImageIcon,
  FormatJavaIcon,
  FormatJpgIcon,
  FormatJsIcon,
  FormatJsonIcon,
  FormatLogIcon,
  FormatMovIcon,
  FormatMp3Icon,
  FormatMpgIcon,
  FormatOggIcon,
  FormatPdfIcon,
  FormatPhpIcon,
  FormatPngIcon,
  FormatPowerpointIcon,
  FormatPptIcon,
  FormatPythonIcon,
  FormatTifIcon,
  FormatTorrentIcon,
  FormatTxtIcon,
  FormatVideoIcon,
  FormatWavIcon,
  FormatWebpIcon,
  FormatWmaIcon,
  FormatWoffIcon,
  FormatWordIcon,
  FormatXlsIcon,
  FormatXmlIcon,
  FormatZipIcon,
  Icon,
} from "../icons";
import { FC } from "react";

export const useDocumentIcon = () => {
  const map: Record<string, FC<Icon>> = {
    // application/atom+xml: Atom
    // application/EDI-X12: EDI X12 (RFC 1767)
    // application/EDIFACT: EDI EDIFACT (RFC 1767)
    "application/json": FormatJsonIcon, // JavaScript Object Notation JSON (RFC 4627)
    "application/javascript": FormatJsIcon, // JavaScript (RFC 4329)
    // application/octet-stream: двоичный файл без указания формата (RFC 2046)[4]
    "application/ogg": FormatOggIcon, // Ogg (RFC 5334)
    "application/pdf": FormatPdfIcon, // Portable Document Format, PDF (RFC 3778)
    // application/postscript: PostScript (RFC 2046)
    "application/soap+xml": FormatXmlIcon, // SOAP (RFC 3902)
    "application/font-woff": FormatWoffIcon, // Web Open Font Format
    "application/xhtml+xml": FormatXmlIcon, // XHTML (RFC 3236)
    "application/xml-dtd": FormatXmlIcon, // DTD (RFC 3023)
    "application/xop+xml": FormatXmlIcon, // XOP
    "application/zip": FormatZipIcon, // ZIP
    "application/gzip": FormatZipIcon, // Gzip
    // application/x-bittorrent : BitTorrent
    // application/x-tex : TeX
    "application/xml": FormatXmlIcon, // XML
    "application/python": FormatPythonIcon, // Python
    "application/java": FormatJavaIcon,
    "application/torrent": FormatTorrentIcon,
    "application/x-bittorrent": FormatTorrentIcon,
    // application/x-yaml: YAML

    // audio

    "audio/basic": FormatAudioIcon, // mulaw аудио, 8 кГц, 1 канал (RFC 2046)
    "audio/L24": FormatAudioIcon, // 24bit Linear PCM аудио, 8-48 кГц, 1-N каналов (RFC 3190)
    "audio/mp4": FormatAudioIcon, // MP4
    "audio/aac": FormatAudioIcon, // AAC
    "audio/mpeg": FormatMp3Icon, // MP3 или др. MPEG (RFC 3003)
    "audio/ogg": FormatOggIcon, // Ogg Vorbis, Speex, Flac или др. аудио (RFC 5334)
    "audio/vorbis": FormatAudioIcon, // Vorbis (RFC 5215)
    "audio/x-ms-wma": FormatWmaIcon, // Windows Media Audio
    "audio/x-ms-wax": FormatAudioIcon, // Windows Media Audio перенаправление
    "audio/vnd.rn-realaudio": FormatAudioIcon, // RealAudio
    "audio/vnd.wave": FormatWavIcon, // WAV (RFC 2361)
    "audio/webm": FormatAudioIcon, // WebM

    // image

    bmp: FormatImageIcon,
    "image/bmp": FormatImageIcon,
    gif: FormatGifIcon,
    "image/gif": FormatGifIcon,
    jpg: FormatJpgIcon,
    jpeg: FormatJpgIcon,
    "image/jpg": FormatJpgIcon,
    "image/jpeg": FormatJpgIcon,
    "image/pjpeg": FormatJpgIcon,
    png: FormatPngIcon,
    "image/png": FormatPngIcon,
    svg: FormatImageIcon,
    "image/svg": FormatImageIcon,
    "image/svg+xml": FormatImageIcon,
    "image/tiff": FormatTifIcon,
    tiff: FormatTifIcon,
    webp: FormatWebpIcon,
    "image/webp": FormatWebpIcon,
    "image/vnd.wap.wbmp": FormatWebpIcon,

    // text

    "text/cmd": FormatCmdIcon, // команды
    "text/css": FormatCssIcon, // Cascading Style Sheets (RFC 2318)
    "text/csv": FormatCsvIcon, // CSV (RFC 4180)
    "text/html": FormatHtmlIcon, // HTML (RFC 2854)
    "text/javascript": FormatJsIcon, // (Obsolete): JavaScript (RFC 4329)
    "text/plain": FormatTxtIcon, // текстовые данные (RFC 2046 и RFC 3676)
    "text/php": FormatPhpIcon, // Скрипт языка PHP
    "text/xml": FormatXmlIcon, // Extensible Markup Language (RFC 3023)
    "text/log": FormatLogIcon, // Логи
    "text/java": FormatJavaIcon,
    "text/python": FormatPythonIcon,
    // text/markdown: файл языка разметки Markdown (RFC 7763)
    // text/cache-manifest: файл манифеста(RFC 2046)

    // video

    "video/mpeg": FormatMpgIcon, // MPEG-1 (RFC 2045 и RFC 2046)
    "video/mp4": FormatVideoIcon, // MP4 (RFC 4337)
    "video/ogg": FormatOggIcon, // Ogg Theora или другое видео (RFC 5334)
    "video/quicktime": FormatMovIcon, // QuickTime
    "video/webm": FormatVideoIcon, // WebM
    "video/x-ms-wmv": FormatVideoIcon, // Windows Media Video
    "video/x-flv": FormatVideoIcon, // FLV
    "video/x-msvideo": FormatVideoIcon, // AVI
    "video/3gpp": FormatVideoIcon, // .3gpp .3gp
    "video/3gpp2": FormatVideoIcon, // .3gpp2 .3g2

    // vnd

    "application/vnd.oasis.opendocument.text": FormatDocIcon, // OpenDocument
    "application/vnd.oasis.opendocument.spreadsheet": FormatDocIcon, // OpenDocument
    "application/vnd.oasis.opendocument.presentation": FormatDocIcon, // OpenDocument
    "application/vnd.ms-excel": FormatExcelIcon, // Microsoft Excel файлы
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      FormatExcelIcon, // Microsoft Excel 2007 файлы
    "application/vnd.ms-excel.sheet.macroEnabled.12": FormatXlsIcon, // Microsoft Excel 2007 файлы c макросами .XLSM
    "application/vnd.ms-powerpoint": FormatPowerpointIcon, // Microsoft Powerpoint файлы
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      FormatPowerpointIcon, // Microsoft Powerpoint 2007 файлы
    "application/msword": FormatWordIcon, // Microsoft Word файлы
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      FormatWordIcon, // Microsoft Word 2007 файлы
    "application/ppt": FormatPptIcon,
    "application/pptx": FormatPptIcon,

    // System files
    // b2doc: DocumentIcon,
    // b2table: TableIcon,
    // b2process: ProcessIcon,
    // b2map: MapIcon,
    // b2product: ProductIcon,
    // b2storage: WarehouseIcon,
    // b2counterparty: ContactPageIcon,
    // b2task: TaskIcon,

    default: DocumentIcon,
  };

  return map;
};
