class StaticPagesController < ActionController::Base
  def frontend_index
    render file: Rails.root.join('app', 'views', 'layouts', 'application.html.erb')
  end
end