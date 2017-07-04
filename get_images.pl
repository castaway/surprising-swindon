#!/usr/bin/perl

use strict;
use warnings;

use JSON;
use LWP::Simple 'getstore';

my $filename = shift;

open(my $jsonfh, "<", $filename) or die ("Can't open filename ($!)");
my $json = join("", map { chomp; $_ } (<$jsonfh>));
# warn $json;
my $entries = decode_json($json);

foreach my $entry (@$entries) {
#    next if $entry->{mapimg};
    next if !$entry->{map_link};

    my $path = 'src/assets/img/map_' . sprintf("%03d", $entry->{id}) . '.jpg';
    my $ret = getstore($entry->{map_link}, $path);
    if($ret == 200) {
        $entry->{mapimg} = $path;
    } else {
        warn "Failed to fetch map image for $entry->{id} - $entry->{map_link}\n";
    }
}

print encode_json($entries);
