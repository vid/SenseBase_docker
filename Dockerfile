FROM dockerfile/nodejs

RUN groupadd -r sbuser -g 433 && \
useradd -u 431 -r -g sbuser -d /data/SenseBase -s /sbin/nologin -c "SenseBase user" sbuser
RUN chown -R sbuser /usr/local
RUN npm install -g grunt-cli bower

RUN pwd
RUN git clone https://github.com/vid/SenseBase.git
COPY config.js ./data/SenseBase/
COPY local-site.json ./data/SenseBase/
WORKDIR /data/SenseBase
RUN mkdir uploads

RUN ls

RUN npm install
RUN bower --allow-root install && \
  grunt libs 

RUN chown -R sbuser /data
USER sbuser

#run this if no arguments
CMD ["grunt"]

