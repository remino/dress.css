module NavHelpers
  def top_level_pages
    sitemap.resources.select do |resource|
      resource.path.match?(%r{^#{data.site.prefix}/([^/]+)/?$}) && resource.ext == '.html'
    end
  end

	def nav_item_title(resource)
		return resource.data.title if resource.data.title
		name = File.basename(resource.path, File.extname(resource.path))
		t("menu.items.#{name}", default: name.capitalize)
	end
end
