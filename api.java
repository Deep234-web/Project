import 'api.java','database.ts''src/app.ts','database.sql';
// Create a neat value object to hold the URL
URL url = new URL("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");

// Open a connection(?) on the URL(??) and cast the response(???)
HttpURLConnection connection = (HttpURLConnection) url.openConnection();

// Now it's "open", we can set the request method, headers etc.
connection.setRequestProperty("accept", "application/json");

// This line makes the request
InputStream responseStream = connection.getInputStream();

// Manually converting the response body InputStream to APOD using Jackson
ObjectMapper mapper = new ObjectMapper();
APOD apod = mapper.readValue(responseStream, APOD.class);

// Finally we have the response
System.out.println(apod.title);
// create a client
var client = HttpClient.newHttpClient();

// create a request
var request = HttpRequest.newBuilder(
       URI.create("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"))
   .header("accept", "application/json")
   .build();

// use the client to send the request
var response = client.send(request, new JsonBodyHandler<>(APOD.class));

// the response:
System.out.println(response.body().get().title);// use the client to send the request
var responseFuture = client.sendAsync(request, new JsonBodyHandler<>(APOD.class));

// We can do other things here while the request is in-flight

// This blocks until the request is complete
var response = responseFuture.get();

// the response:
System.out.println(response.body().get().title);