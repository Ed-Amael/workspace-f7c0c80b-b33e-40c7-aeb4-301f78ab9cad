"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  User, 
  MessageSquare, 
  Calendar,
  RefreshCw,
  Eye,
  CheckCircle
} from "lucide-react";

interface Contact {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function AdminContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/contact');
      
      if (response.ok) {
        const data = await response.json();
        setContacts(data);
        setError(null);
      } else {
        setError('Failed to fetch contacts');
      }
    } catch (err) {
      setError('Network error');
      console.error('Error fetching contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const updateContactStatus = async (id: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setContacts(prev => 
          prev.map(contact => 
            contact.id === id 
              ? { ...contact, status: newStatus }
              : contact
          )
        );
      }
    } catch (err) {
      console.error('Error updating contact status:', err);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'read': return 'bg-yellow-500';
      case 'replied': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'New';
      case 'read': return 'Read';
      case 'replied': return 'Replied';
      default: return 'Unknown';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading contacts...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchContacts} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Retry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Contact Submissions</h1>
            <p className="text-muted-foreground mt-2">
              Manage contact form submissions from your website
            </p>
          </div>
          <Button onClick={fetchContacts} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {contacts.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <Mail className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No contacts yet</h3>
              <p className="text-muted-foreground">
                Contact form submissions will appear here when users submit the form.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {contacts.map((contact) => (
              <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                        <CardDescription className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{contact.email}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className={`${getStatusColor(contact.status)} text-white`}>
                        {getStatusText(contact.status)}
                      </Badge>
                      <div className="flex space-x-1">
                        {contact.status === 'new' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateContactStatus(contact.id, 'read')}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                        )}
                        {contact.status === 'read' && (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateContactStatus(contact.id, 'replied')}
                          >
                            <CheckCircle className="w-4 h-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Subject</h4>
                      <p className="text-muted-foreground">{contact.subject}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2 flex items-center">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Message
                      </h4>
                      <p className="text-muted-foreground whitespace-pre-wrap">
                        {contact.message}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Submitted: {formatDate(contact.createdAt)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
