package com.gitexplorer.core.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.gitexplorer.core.data.Developer;
import com.gitexplorer.core.data.TrendingReport;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
public class GitHubTrendingController {

    private CloseableHttpClient httpclient = HttpClients.createDefault();

    @RequestMapping("/repositories")
    public TrendingReport[] topRepositories(
            @RequestParam(value = "since", defaultValue = "monthly") String since,
            @RequestParam(value = "language", defaultValue = "") String language
    ) throws IOException {
        HttpGet httpGet = new HttpGet("https://github-trending-api.now.sh/repositories?since=" + since
                + "&language=" + language);
        CloseableHttpResponse response = httpclient.execute(httpGet);
        return new ObjectMapper().readValue(response.getEntity().getContent(), TrendingReport[].class);
    }

    @RequestMapping("/developers")
    public Developer[] topUsers(
            @RequestParam(value = "since", defaultValue = "monthly") String since,
            @RequestParam(value = "language", defaultValue = "") String language
    ) throws IOException {
        HttpGet httpGet = new HttpGet("https://github-trending-api.now.sh/developers?since=" + since
                + "&language=" + language);
        CloseableHttpResponse response = httpclient.execute(httpGet);
        return new ObjectMapper().readValue(response.getEntity().getContent(), Developer[].class);
    }

    @RequestMapping("/languages")
    public Developer[] topLanguages(
            @RequestParam(value = "since", defaultValue = "monthly") String since,
            @RequestParam(value = "language", defaultValue = "") String language
    ) throws IOException {
        HttpGet httpGet = new HttpGet("https://github-trending-api.now.sh/languages");
        CloseableHttpResponse response = httpclient.execute(httpGet);
        return new ObjectMapper().readValue(response.getEntity().getContent(), Developer[].class);
    }
}
