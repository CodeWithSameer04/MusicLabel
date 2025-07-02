import React, { useState } from 'react'
import './MusicProduction.css'

export const MusicProduction = () => {
  const [audioFile, setAudioFile] = useState(null)
  const [videoFile, setVideoFile] = useState(null)
  const [dragActive, setDragActive] = useState({ audio: false, video: false })

  const handleDrag = (e, type) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(prev => ({ ...prev, [type]: true }))
    } else if (e.type === "dragleave") {
      setDragActive(prev => ({ ...prev, [type]: false }))
    }
  }

  const handleDrop = (e, type) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(prev => ({ ...prev, [type]: false }))
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      if (type === 'audio') {
        setAudioFile(e.dataTransfer.files[0])
      } else {
        setVideoFile(e.dataTransfer.files[0])
      }
    }
  }

  const handleFileInput = (e, type) => {
    if (e.target.files && e.target.files[0]) {
      if (type === 'audio') {
        setAudioFile(e.target.files[0])
      } else {
        setVideoFile(e.target.files[0])
      }
    }
  }

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  return (
    <div className="music-production-page">
      {/* Hero Section */}
      <section className="production-hero">
        <div className="hero-content">
          <h1>Music Production Studio</h1>
          <p>Professional music production services with state-of-the-art equipment and expert sound engineers</p>
        </div>
        <div className="hero-visual">
          <div className="sound-wave">
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="production-services">
        <h2>Our Production Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎵</div>
            <h3>Recording</h3>
            <p>Professional recording in our acoustically treated studio with high-end microphones and preamps.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎚️</div>
            <h3>Mixing</h3>
            <p>Expert mixing services to balance and enhance your tracks with professional techniques.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎭</div>
            <h3>Mastering</h3>
            <p>Final polish for your tracks to ensure they sound great on all playback systems.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎼</div>
            <h3>Composition</h3>
            <p>Original composition and arrangement services for various genres and purposes.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎸</div>
            <h3>Instrument Recording</h3>
            <p>Multi-track recording for bands and solo artists with live room acoustics.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎤</div>
            <h3>Vocal Production</h3>
            <p>Specialized vocal recording, tuning, and production for pristine vocal tracks.</p>
          </div>
        </div>
      </section>

      {/* Upload Sections */}
      <section className="upload-section">
        <h2>Upload Your Content</h2>
        <p className="upload-description">Send us your audio files for mixing/mastering or video content for music video production</p>
        
        <div className="upload-container">
          {/* Audio Upload */}
          <div className="upload-box audio-upload">
            <h3>🎵 Audio Upload</h3>
            <div 
              className={`drop-zone ${dragActive.audio ? 'drag-active' : ''}`}
              onDragEnter={(e) => handleDrag(e, 'audio')}
              onDragLeave={(e) => handleDrag(e, 'audio')}
              onDragOver={(e) => handleDrag(e, 'audio')}
              onDrop={(e) => handleDrop(e, 'audio')}
            >
              <div className="upload-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              {audioFile ? (
                <div className="file-info">
                  <div className="file-name">{audioFile.name}</div>
                  <div className="file-size">{formatFileSize(audioFile.size)}</div>
                  <button className="remove-file" onClick={() => setAudioFile(null)}>×</button>
                </div>
              ) : (
                <>
                  <p className="upload-text">Drag & drop your audio files here</p>
                  <p className="upload-subtext">Supports: MP3, WAV, FLAC, AIFF</p>
                </>
              )}
              <input 
                type="file" 
                accept=".mp3,.wav,.flac,.aiff" 
                onChange={(e) => handleFileInput(e, 'audio')}
                className="file-input"
              />
              <button className="browse-btn">Browse Files</button>
            </div>
          </div>

          {/* Video Upload */}
          <div className="upload-box video-upload">
            <h3>🎬 Video Upload</h3>
            <div 
              className={`drop-zone ${dragActive.video ? 'drag-active' : ''}`}
              onDragEnter={(e) => handleDrag(e, 'video')}
              onDragLeave={(e) => handleDrag(e, 'video')}
              onDragOver={(e) => handleDrag(e, 'video')}
              onDrop={(e) => handleDrop(e, 'video')}
            >
              <div className="upload-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              {videoFile ? (
                <div className="file-info">
                  <div className="file-name">{videoFile.name}</div>
                  <div className="file-size">{formatFileSize(videoFile.size)}</div>
                  <button className="remove-file" onClick={() => setVideoFile(null)}>×</button>
                </div>
              ) : (
                <>
                  <p className="upload-text">Drag & drop your video files here</p>
                  <p className="upload-subtext">Supports: MP4, MOV, AVI, MKV</p>
                </>
              )}
              <input 
                type="file" 
                accept=".mp4,.mov,.avi,.mkv" 
                onChange={(e) => handleFileInput(e, 'video')}
                className="file-input"
              />
              <button className="browse-btn">Browse Files</button>
            </div>
          </div>
        </div>
        
        <div className="upload-actions">
          <button className="submit-btn" disabled={!audioFile && !videoFile}>
            Submit Files
          </button>
        </div>
      </section>

      {/* Studio Info */}
      <section className="studio-info">
        <div className="info-grid">
          <div className="info-card">
            <h3>World-Class Equipment</h3>
            <p>Our studio features industry-standard equipment including Neumann microphones, SSL consoles, and premium monitors for exceptional sound quality.</p>
          </div>
          <div className="info-card">
            <h3>Expert Engineers</h3>
            <p>Work with Grammy-nominated engineers and producers who have years of experience in various genres from pop to electronic music.</p>
          </div>
          <div className="info-card">
            <h3>Flexible Packages</h3>
            <p>Choose from hourly rates, project-based pricing, or monthly packages that suit your budget and production needs.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MusicProduction;
