import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Search, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// V3: NASA Image Library Browser
// API: NASA Image and Video Library
// https://images-api.nasa.gov/search?q={query}

export function SpaceV3() {
  const [searchTerm] = useState('nebula');

  // Mock data representing NASA Image Library API response
  const imageData = [
    {
      nasaId: 'PIA23122',
      title: 'Carina Nebula Star-Forming Region',
      description: 'This image shows the Carina Nebula star-forming region in the southern constellation Carina, as seen by the NASA/ESA Hubble Space Telescope.',
      dateCreated: '2019-04-24',
      keywords: ['Hubble Space Telescope', 'nebula', 'stars'],
      imageUrl: 'https://images.unsplash.com/photo-1504812333783-63b845853c20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWJ1bGElMjBzcGFjZSUyMGdhbGF4eSUyMHN0YXJzfGVufDF8fHx8MTc3MTg5Mjk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      nasaId: 'PIA24927',
      title: 'Jupiter\'s Great Red Spot',
      description: 'This image of Jupiter was taken by the JunoCam imager aboard NASA\'s Juno spacecraft.',
      dateCreated: '2021-09-02',
      keywords: ['Juno', 'Jupiter', 'Great Red Spot'],
      imageUrl: 'https://images.unsplash.com/photo-1729176515850-c6cc55ab48da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFuZXQlMjBhc3Ryb25vbXklMjBjb3NtaWN8ZW58MXx8fHwxNzcxODkyOTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      nasaId: 'PIA23645',
      title: 'Milky Way Galaxy',
      description: 'A stunning view of our home galaxy, the Milky Way, captured from Earth\'s surface.',
      dateCreated: '2020-07-15',
      keywords: ['Milky Way', 'galaxy', 'stars', 'night sky'],
      imageUrl: 'https://images.unsplash.com/photo-1691561411811-f096dd57da10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWxreSUyMHdheSUyMG5pZ2h0JTIwc2t5JTIwc3RhcnN8ZW58MXx8fHwxNzcxODQxOTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      nasaId: 'PIA24856',
      title: 'Aurora Borealis from ISS',
      description: 'The aurora borealis, or northern lights, captured from the International Space Station.',
      dateCreated: '2022-03-18',
      keywords: ['ISS', 'aurora', 'Earth'],
      imageUrl: 'https://images.unsplash.com/photo-1666003400042-a9e68d6bff0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXJvcmElMjBib3JlYWxpcyUyMG5vcnRoZXJuJTIwbGlnaHRzfGVufDF8fHx8MTc3MTg5MDQyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <section className="min-h-screen bg-zinc-950 py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header with Search */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              NASA Image Library
            </h2>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
              <input
                type="text"
                placeholder="Search the cosmos..."
                defaultValue={searchTerm}
                className="w-full pl-12 pr-4 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <p className="mt-4 text-zinc-500 text-sm">
              Showing results for "{searchTerm}" • {imageData.length} images found
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {imageData.map((item, index) => (
              <motion.div
                key={item.nasaId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Overlay Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors pr-4">
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between">
                    <p className="text-zinc-600 text-xs">{item.dateCreated}</p>
                    <p className="text-zinc-600 text-xs">NASA ID: {item.nasaId}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.keywords.slice(0, 3).map((keyword, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-zinc-800 text-zinc-400 text-xs rounded"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* API Note */}
          <div className="mt-12 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
            <p className="text-zinc-500 text-xs">
              <span className="text-zinc-400 font-semibold">API Integration: </span>
              Connect to NASA's Image and Video Library at images-api.nasa.gov
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
