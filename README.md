
Install and verify [Docker](https://www.docker.com/) runs.

Set up an ElasticSearch container with a name, eg 

        docker run -d --name es -v /es-data:/data dockerfile/elasticsearch /elasticsearch/bin/elasticsearch -Des.config=/data/elasticsearch.yml

Then, in this repo, copy and customize the conf/ files in the root dir.

Finally, execute these commands to set up and run SenseBase on port 9999:

        docker build -t="sensebase:git" .
        docker run -d -p 9999:9999 --link es:es sensebase:git

