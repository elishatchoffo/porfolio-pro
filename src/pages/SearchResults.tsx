import React, { useState, useEffect, useMemo } from 'react';
import { mockProfiles, countries, Profile } from '../data/mockProfiles';
import ProfileCard from '../components/ProfileCard';
import FilterSidebar from '../components/Enligne/FilterSidebar';
import SortingBar from '../components/Enligne/SortingBar';
import Pagination from '../components/Enligne/Pagination';
import LoadingSpinner from '../components/Enligne/LoadingSpinner';

const SearchResults: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeSort, setActiveSort] = useState('recent');
  const [filters, setFilters] = useState({
    ageRange: [18, 50] as [number, number],
    country: 'All Countries',
    withPhotoOnly: false,
    onlineOnly: false
  });

  const profilesPerPage = 12;

  // Filter and sort profiles
  const filteredProfiles = useMemo(() => {
    let filtered = mockProfiles.filter(profile => {
      // Age filter
      if (profile.age < filters.ageRange[0] || profile.age > filters.ageRange[1]) {
        return false;
      }

      // Country filter
      if (filters.country !== 'All Countries' && profile.country !== filters.country) {
        return false;
      }

      // Photo filter
      if (filters.withPhotoOnly && !profile.hasPhoto) {
        return false;
      }

      // Online filter
      if (filters.onlineOnly && !profile.isOnline) {
        return false;
      }

      return true;
    });

    // Sort profiles
    switch (activeSort) {
      case 'recent':
        filtered.sort((a, b) => {
          if (a.isOnline && !b.isOnline) return -1;
          if (!a.isOnline && b.isOnline) return 1;
          return 0;
        });
        break;
      case 'photo':
        filtered.sort((a, b) => {
          if (a.hasPhoto && !b.hasPhoto) return -1;
          if (!a.hasPhoto && b.hasPhoto) return 1;
          return 0;
        });
        break;
      case 'matches':
        // Mock sorting by matches (random for demo)
        filtered.sort(() => Math.random() - 0.5);
        break;
      case 'featured':
        filtered.sort((a, b) => {
          if (a.isVerified && !b.isVerified) return -1;
          if (!a.isVerified && b.isVerified) return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, activeSort]);

  // Pagination
  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);
  const startIndex = (currentPage - 1) * profilesPerPage;
  const endIndex = startIndex + profilesPerPage;
  const currentProfiles = filteredProfiles.slice(startIndex, endIndex);

  // Handle filter changes with loading simulation
  const handleFiltersChange = (newFilters: typeof filters) => {
    setIsLoading(true);
    setFilters(newFilters);
    setCurrentPage(1);

    // Simulate API call delay
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Handle sort changes with loading simulation
  const handleSortChange = (sort: string) => {
    setIsLoading(true);
    setActiveSort(sort);
    setCurrentPage(1);

    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  // Handle page changes
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Résultats de recherche</h1>
          <p className="text-gray-600 mt-2">Découvrez des profils qui vous correspondent</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex">
          {/* Filter Sidebar */}
          <FilterSidebar
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            countries={countries}
          />

          {/* Main Content */}
          <div className="flex-1 lg:ml-0">
            {/* Sorting Bar */}
            <SortingBar
              onToggleFilters={() => setIsFilterOpen(true)}
              activeSort={activeSort}
              onSortChange={handleSortChange}
              resultsCount={filteredProfiles.length}
            />

            {/* Loading State */}
            {isLoading && <LoadingSpinner />}

            {/* Profiles Grid */}
            {!isLoading && (
              <>
                {currentProfiles.length > 0 ? (
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                      {currentProfiles.map((profile) => (
                        <ProfileCard key={profile.id} profile={profile} />
                      ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="text-gray-500 text-lg mb-4">
                      Aucun profil ne correspond à vos critères de recherche
                    </div>
                    <button
                      onClick={() => setFilters({
                        ageRange: [18, 50],
                        country: 'All Countries',
                        withPhotoOnly: false,
                        onlineOnly: false
                      })}
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Réinitialiser les filtres
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;