import React from 'react';
import { Search, SlidersHorizontal, LayoutGrid, List } from 'lucide-react';

const ProductToolbar = ({ 
  filters, 
  setFilters, 
  filterOptions, 
  onOpenDrawer, 
  viewMode, 
  setViewMode,
  resultCount
}) => {
  return (
    <div className="w-full bg-white border-b border-brandBorder sticky top-[72px] lg:top-[88px] z-40 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        
        {/* Search */}
        <div className="relative w-full lg:w-[320px] flex-shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brandMuted" />
          <input
            type="text"
            placeholder="Search products or brands"
            value={filters.search}
            onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            className="w-full bg-[#FAF9F6] border border-brandBorder rounded-full py-3 pl-12 pr-6 text-sm font-medium text-brandPrimary placeholder:text-brandMuted focus:outline-none focus:border-brandPrimary focus:ring-1 focus:ring-brandPrimary transition-all"
          />
        </div>

        {/* Desktop Inline Filters */}
        <div className="hidden lg:flex items-center gap-6 flex-1">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brandMuted">Category:</span>
            <select 
              value={filters.category}
              onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
              className="bg-transparent text-sm font-semibold text-brandPrimary focus:outline-none cursor-pointer"
            >
              {filterOptions.categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="w-px h-6 bg-brandBorder"></div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brandMuted">Gender:</span>
            <select 
              value={filters.gender}
              onChange={(e) => setFilters(prev => ({ ...prev, gender: e.target.value }))}
              className="bg-transparent text-sm font-semibold text-brandPrimary focus:outline-none cursor-pointer"
            >
              {filterOptions.genders.map(gen => (
                <option key={gen} value={gen}>{gen}</option>
              ))}
            </select>
          </div>
          
          <div className="w-px h-6 bg-brandBorder"></div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brandMuted">Sort by:</span>
            <select 
              value={filters.sort}
              onChange={(e) => setFilters(prev => ({ ...prev, sort: e.target.value }))}
              className="bg-transparent text-sm font-semibold text-brandPrimary focus:outline-none cursor-pointer"
            >
              <option value="Featured">Featured</option>
              <option value="Newest">Newest</option>
              <option value="Product Name A-Z">Product Name A–Z</option>
              <option value="Product Name Z-A">Product Name Z–A</option>
            </select>
          </div>
        </div>

        {/* Right side controls (Mobile Filter btn, Results count, View toggles) */}
        <div className="flex items-center justify-between lg:justify-end gap-6 border-t border-brandBorder pt-4 lg:border-t-0 lg:pt-0">
          
          <button 
            onClick={onOpenDrawer}
            className="lg:hidden flex items-center gap-2 text-sm font-bold text-brandPrimary bg-[#FAF9F6] border border-brandBorder px-4 py-2 rounded-full"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          <div className="flex items-center gap-6">
            <span aria-live="polite" className="text-sm font-medium text-brandMuted">
              <strong className="text-brandPrimary">{resultCount}</strong> Results
            </span>

            <div className="hidden sm:flex items-center gap-2 border border-brandBorder p-1 rounded-lg bg-[#FAF9F6]">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-brandPrimary' : 'text-brandMuted hover:text-brandPrimary'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-brandPrimary' : 'text-brandMuted hover:text-brandPrimary'}`}
                aria-label="List view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductToolbar;
