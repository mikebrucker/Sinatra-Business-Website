require 'sinatra'
require 'rainbow'
require 'sendinblue'

get '/' do
    erb :home, layout: :layout
end

get '/about' do
    erb :about, layout: :layout
end

get '/destinations' do
    erb :destinations, layout: :layout
end

get '/contact' do
    erb :contact, layout: :layout
end

post '/contact' do
    puts Rainbow(params.inspect).blue
    @email = params[:email]
    @name = params[:name]
    @destination = params[:destination]
    @textarea = params[:textarea]
    m = Sendinblue::Mailin.new("https://api.sendinblue.com/v2.0",ENV['SENDINBLUE_API_KEY'],5)	#Optional parameter: Timeout in Secs
    data = { "to" => {"myEmail@myEmail.com"=>"Nowhere Travel Agency"},
        "from" => [@email,"from #{@name}!"],
        "subject" => @destination,
        "text" => "#{@name} is inquiring about #{@destination}: #{@textarea}"
    }
    result = m.send_email(data)
    puts result
    erb :contact, layout: :layout
end