class StaticPagesController < ActionController::Base
  def frontend_index
    render file: Rails.root.join('public', 'layouts/application.html.erb')
  end
end