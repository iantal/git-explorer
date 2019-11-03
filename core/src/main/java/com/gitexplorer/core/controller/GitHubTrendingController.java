package com.gitexplorer.core.controller;

<<<<<<< HEAD
import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitexplorer.core.data.TrendingReport;
import org.apache.http.HttpEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@RestController
public class GitHubTrendingController {

    private CloseableHttpClient httpclient = HttpClients.createDefault();

    @RequestMapping("/repositories")
    public TrendingReport[] topRepositories(
            @RequestParam(value="since", defaultValue="monthly") String since,
            @RequestParam(value="language", defaultValue="") String language
    ) throws IOException {
        HttpGet httpGet = new HttpGet("https://github-trending-api.now.sh/repositories?since=" + since
                + "&language=" + language);
        CloseableHttpResponse response = httpclient.execute(httpGet);
        return new ObjectMapper().readValue(response.getEntity().getContent(), TrendingReport[].class);
    }
=======
public class GitHubTrendingController {
>>>>>>> master
}
